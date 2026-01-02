import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("leads.submit", () => {
  it("submits a lead successfully with valid data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      name: "John Doe",
      email: "john@example.com",
      company: "Acme Corp",
      message: "I am interested in your finance intelligence services for our real estate portfolio.",
    });

    expect(result).toEqual({ success: true });
  });

  it("submits a lead without company field", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Looking to discuss receivables management solutions.",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.submit({
        name: "Test User",
        email: "invalid-email",
        message: "This should fail due to invalid email.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("rejects submission with empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.submit({
        name: "",
        email: "test@example.com",
        message: "This should fail due to empty name.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("rejects submission with message too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.submit({
        name: "Test User",
        email: "test@example.com",
        message: "Short",
      });
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
