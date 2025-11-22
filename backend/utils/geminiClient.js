const axios = require('axios');

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta1/models/gemini-1.5-flash:generateMessage';

async function getCoffeeAnswer(prompt) {
  const systemPrompt = `You are Barist.AI — a coffee-only expert chatbot.\nYou must answer ONLY coffee-related questions: brewing, beans, roast levels, espresso, latte, cappuccino, equipment, recipes, and coffee history.\nIf user asks anything not related to coffee, reply exactly: \"I can only answer questions related to coffee ☕.\"`;

  const body = {
    // Adjust depending on API surface — this is a generic request body compatible with many Gemini endpoints
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt }
    ],
    temperature: 0.6,
    maxOutputTokens: 600
  };

  try {
    const res = await axios.post(GEMINI_URL, body, {
      headers: {
        Authorization: `Bearer ${process.env.GOOGLE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    // The shape of the response may vary; we'll try common paths
    const candidate = res.data?.candidates?.[0] || res.data?.outputs?.[0] || null;
    if (!candidate) return 'Sorry, I could not generate an answer right now.';

    // Try several places to get text
    const text = candidate?.content?.parts?.[0] || candidate?.text || candidate?.message?.content || JSON.stringify(candidate);
    return text;
  } catch (err) {
    console.error('Gemini error:', err.response?.data || err.message);
    throw new Error('AI provider error');
  }
}

module.exports = { getCoffeeAnswer };