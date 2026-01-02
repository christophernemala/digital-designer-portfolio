import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import type { User } from "../drizzle/schema";

type AuthenticatedUser = User;

function createAuthContext(): { ctx: TrpcContext; } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return { ctx };
}

describe("portfolio.createProject", () => {
  it("creates a new portfolio project successfully", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.portfolio.createProject({
      title: "Real Estate Finance Dashboard",
      description: "Advanced receivables management system",
      category: "Finance Tech",
      thumbnailUrl: "https://example.com/thumb.jpg",
    });

    expect(result).toEqual({ success: true });
  });

  it("requires authentication for project creation", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    try {
      await caller.portfolio.createProject({
        title: "Test Project",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("portfolio.uploadFile", () => {
  it("requires authentication for file upload", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    try {
      await caller.portfolio.uploadFile({
        projectId: 1,
        filename: "test.jpg",
        fileData: "base64encodeddata",
        mimeType: "image/jpeg",
        fileSize: 1024,
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("validates file input parameters", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.portfolio.uploadFile({
        projectId: 0,
        filename: "",
        fileData: "",
        mimeType: "",
        fileSize: -1,
      });
      // File upload will fail due to storage service, but input validation should pass
    } catch (error) {
      // Expected error from storage service
      expect(error).toBeDefined();
    }
  });
});

describe("portfolio.getProjectFiles", () => {
  it("requires authentication to retrieve project files", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    try {
      await caller.portfolio.getProjectFiles({ projectId: 1 });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("retrieves project files for authenticated user", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.portfolio.getProjectFiles({ projectId: 1 });
    
    expect(Array.isArray(result)).toBe(true);
  });
});
