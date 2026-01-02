import { describe, it, expect } from 'vitest';
import { appRouter } from './routers';
import type { TrpcContext } from './_core/context';

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: 'https',
      headers: {},
    } as TrpcContext['req'],
    res: {} as TrpcContext['res'],
  };
}

describe('ai.explainProject', () => {
  it('generates an AI explanation for a portfolio project', async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.ai.explainProject({
      projectTitle: 'AR Automation System',
      projectDescription: 'Automated accounts receivable processing for a large real estate portfolio, reducing manual work by 60%.',
      projectCategory: 'Finance Automation',
    });

    expect(result.success).toBe(true);
    expect(result.explanation).toBeDefined();
    expect(typeof result.explanation).toBe('string');
    expect(result.explanation.length).toBeGreaterThan(50);
    expect(result.projectTitle).toBe('AR Automation System');
    
    console.log('AI Explanation:', result.explanation.substring(0, 200) + '...');
  }, 30000); // 30 second timeout for API call

  it('handles custom visitor questions', async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.ai.explainProject({
      projectTitle: 'Power BI Dashboard',
      projectDescription: 'Executive dashboard for real-time AR aging and DSO tracking.',
      projectCategory: 'Business Intelligence',
      question: 'What technologies were used in this project?',
    });

    expect(result.success).toBe(true);
    expect(result.explanation).toBeDefined();
    expect(typeof result.explanation).toBe('string');
    
    console.log('AI Response to Question:', result.explanation.substring(0, 200) + '...');
  }, 30000); // 30 second timeout for API call
});
