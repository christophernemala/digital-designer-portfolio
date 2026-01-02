import { describe, it, expect } from 'vitest';

describe('OpenAI API Key Validation', () => {
  it('validates the OpenAI API key by listing models', async () => {
    const apiKey = process.env.OPENAI_API_KEY;
    
    // Skip test if no API key is configured
    if (!apiKey) {
      console.log('OPENAI_API_KEY not configured, skipping validation');
      return;
    }

    // Make a lightweight API call to validate the key
    const response = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    // Check if the API key is valid
    expect(response.status).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    
    console.log(`OpenAI API key validated successfully. ${data.data.length} models available.`);
  });
});
