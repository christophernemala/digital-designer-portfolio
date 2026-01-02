import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createPortfolioProject, uploadPortfolioFile, getProjectFiles, createContactLead } from "./db";
import { notifyOwner } from "./_core/notification";
import { storagePut } from "./storage";
import { nanoid } from "nanoid";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, 'Name is required'),
          email: z.string().email('Invalid email address'),
          company: z.string().optional(),
          message: z.string().min(10, 'Message must be at least 10 characters'),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createContactLead({
            name: input.name,
            email: input.email,
            company: input.company || null,
            message: input.message,
          });

          await notifyOwner({
            title: `New Lead: ${input.name}`,
            content: `Name: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company || 'Not provided'}\n\nMessage:\n${input.message}`,
          });

          return { success: true };
        } catch (error) {
          console.error('Lead submission error:', error);
          throw new Error('Failed to submit contact form');
        }
      }),
  }),

  portfolio: router({
    // Upload a file to portfolio project
    uploadFile: protectedProcedure
      .input(
        z.object({
          projectId: z.number(),
          filename: z.string(),
          fileData: z.string(),
          mimeType: z.string(),
          fileSize: z.number(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          const fileKey = `portfolio/${ctx.user.id}/${input.projectId}/${nanoid()}-${input.filename}`;
          const buffer = Buffer.from(input.fileData, 'base64');
          const { url } = await storagePut(fileKey, buffer, input.mimeType);
          
          await uploadPortfolioFile(ctx.user.id, input.projectId, {
            filename: input.filename,
            fileKey,
            fileUrl: url,
            mimeType: input.mimeType,
            fileSize: input.fileSize,
          });
          
          return {
            success: true,
            url,
            fileKey,
          };
        } catch (error) {
          console.error('File upload error:', error);
          throw new Error('Failed to upload file');
        }
      }),
    
    // Get files for a project
    getProjectFiles: protectedProcedure
      .input(z.object({ projectId: z.number() }))
      .query(async ({ input }) => {
        return getProjectFiles(input.projectId);
      }),
    
    // Create a new portfolio project
    createProject: protectedProcedure
      .input(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          category: z.string().optional(),
          thumbnailUrl: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          await createPortfolioProject(ctx.user.id, input);
          return { success: true };
        } catch (error) {
          console.error('Project creation error:', error);
          throw new Error('Failed to create project');
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
