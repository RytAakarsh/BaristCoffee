const axios = require("axios");

const MODEL = "models/gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

async function getCoffeeAnswer(prompt) {
  const systemPrompt = `
You are Barist.AI — a coffee-only expert chatbot.

OUTPUT RULES (IMPORTANT):
- Your answer MUST be in plain text only.
- Do NOT use **bold**, *italic*, __underline__, markdown symbols, bullet stars, headings, or lists.
- Do NOT use asterisks (*) for formatting.
- Write naturally in simple paragraphs.
- Absolutely NO markdown formatting allowed.
If user asks non-coffee questions reply exactly:
"I can only answer questions related to coffee ☕."
`;

  const body = {
    contents: [
      {
        parts: [
          { text: systemPrompt },
          { text: prompt }
        ]
      }
    ]
  };

  try {
    const res = await axios.post(GEMINI_URL, body, {
      headers: {
        "x-goog-api-key": process.env.GOOGLE_API_KEY,
        "Content-Type": "application/json",
      },
    });

    let text =
      res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not generate an answer.";

    // 🔥 FINAL SAFETY CLEANING — remove unwanted symbols
    text = text
      .replace(/\*\*/g, "")   // remove bold markers
      .replace(/\*/g, "")     // remove list bullets
      .replace(/_/g, "")      // remove italics/underline
      .replace(/#/g, "")      // remove headings
      .replace(/-/g, "")      // remove markdown list dashes
      .trim();

    return text;

  } catch (err) {
    console.error("Gemini error:", err.response?.data || err.message);
    throw new Error("AI provider error");
  }
}

module.exports = { getCoffeeAnswer };
