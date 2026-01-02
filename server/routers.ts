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

  ai: router({
    // AI Portfolio Assistant - explains case studies in detail
    explainProject: publicProcedure
      .input(
        z.object({
          projectTitle: z.string(),
          projectDescription: z.string(),
          projectCategory: z.string(),
          question: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
          throw new Error('OpenAI API key not configured');
        }

        const systemPrompt = `You are Christopher Nemala's AI Portfolio Assistant. Christopher is a Senior Executive specializing in Credit Control, Accounts Receivable, and Order to Cash for large real estate portfolios in Dubai, UAE.

Your role is to explain his portfolio projects in detail to potential clients and employers. Be professional, knowledgeable, and highlight the business value and technical expertise demonstrated in each project.

Key areas of expertise:
- Oracle Fusion subledger governance
- AR aging and credit control
- DSO optimization
- 90+ day risk management
- IFRS 9 ECL reporting
- Excel and Power BI systems
- Executive visibility dashboards
- Audit readiness

The project description you receive contains DETAILED METADATA including:
- Client type and industry context
- Timeline and project duration
- Specific technologies used
- Quantified metrics and KPIs achieved
- Challenges that were addressed
- Business outcomes delivered

USE THIS METADATA to provide specific, data-driven responses. When explaining a project:
1. Reference the actual metrics achieved (e.g., "reduced report generation time by 85%")
2. Mention specific technologies used (e.g., "built using Power BI with DAX and Power Query")
3. Describe the client context (e.g., "for a portfolio of 15,000+ residential units")
4. Highlight key challenges overcome
5. Emphasize measurable business outcomes

Keep responses professional and informative (2-4 paragraphs). Focus on business impact with specific numbers and outcomes.`;

        const userMessage = input.question 
          ? `Project: ${input.projectTitle}\nCategory: ${input.projectCategory}\nDescription: ${input.projectDescription}\n\nVisitor Question: ${input.question}`
          : `Please explain this project in detail:\n\nProject: ${input.projectTitle}\nCategory: ${input.projectCategory}\nDescription: ${input.projectDescription}\n\nProvide a professional explanation of what this project involved, the challenges addressed, and the business value delivered.`;

        try {
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userMessage },
              ],
              max_tokens: 500,
              temperature: 0.7,
            }),
          });

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'OpenAI API error');
          }

          const data = await response.json();
          const explanation = data.choices[0]?.message?.content || 'Unable to generate explanation.';

          return { 
            success: true, 
            explanation,
            projectTitle: input.projectTitle,
          };
        } catch (error) {
          console.error('AI explanation error:', error);
          throw new Error('Failed to generate AI explanation');
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
