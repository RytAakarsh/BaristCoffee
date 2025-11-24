// const axios = require("axios");

// const MODEL = "models/gemini-2.5-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// async function getCoffeeAnswer(prompt) {
//   const systemPrompt = `
// You are Barist.AI — a coffee-only expert chatbot.

// OUTPUT RULES (IMPORTANT):
// - Your answer MUST be in plain text only.
// - Do NOT use **bold**, *italic*, __underline__, markdown symbols, bullet stars, headings, or lists.
// - Do NOT use asterisks (*) for formatting.
// - Write naturally in simple paragraphs.
// - Absolutely NO markdown formatting allowed.
// If user asks non-coffee questions reply exactly:
// "I can only answer questions related to coffee ☕."
// `;

//   const body = {
//     contents: [
//       {
//         parts: [
//           { text: systemPrompt },
//           { text: prompt }
//         ]
//       }
//     ]
//   };

//   try {
//     const res = await axios.post(GEMINI_URL, body, {
//       headers: {
//         "x-goog-api-key": process.env.GOOGLE_API_KEY,
//         "Content-Type": "application/json",
//       },
//     });

//     let text =
//       res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "Sorry, I could not generate an answer.";

//     // 🔥 FINAL SAFETY CLEANING — remove unwanted symbols
//     text = text
//       .replace(/\*\*/g, "")   // remove bold markers
//       .replace(/\*/g, "")     // remove list bullets
//       .replace(/_/g, "")      // remove italics/underline
//       .replace(/#/g, "")      // remove headings
//       .replace(/-/g, "")      // remove markdown list dashes
//       .trim();

//     return text;

//   } catch (err) {
//     console.error("Gemini error:", err.response?.data || err.message);
//     throw new Error("AI provider error");
//   }
// }

// module.exports = { getCoffeeAnswer };



// const axios = require("axios");

// const MODEL = "models/gemini-2.5-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// async function getCoffeeAnswer(prompt) {
//   const systemPrompt = `
// You are Barist.AI — a world-class expert in coffee, brewing, beans, café culture, roasting,
// machines, barista techniques, and drink preparation.

// 🎯 ANSWER FORMAT RULES (VERY IMPORTANT):

// 1. ALWAYS answer using formatted text:
//    - Use headings
//    - Use bullet points
//    - Use numbered steps
//    - Use short sections
//    - Use lists and sub-lists
//    - Use clean spacing

// 2. The answer should be:
//    - Clear
//    - Structured
//    - Beginner-friendly
//    - Easy to understand
//    - Similar to a mini guide or tutorial

// 3. When explaining methods (ex: "how to make coffee"):
//    Include:
//    - Title
//    - Short intro
//    - Essentials / key rules
//    - Step-by-step method
//    - Tips, variations
//    - Mistakes to avoid (if relevant)

// 4. RESTRICTED TOPIC:
//    You must ONLY answer questions related to coffee.
//    If the user asks something unrelated to coffee:
//    Respond EXACTLY with:
//    "I can only answer questions related to coffee ☕."

// Now answer the user's question below:
// `;

//   const body = {
//     contents: [
//       {
//         parts: [{ text: systemPrompt }, { text: prompt }]
//       }
//     ]
//   };

//   try {
//     const res = await axios.post(GEMINI_URL, body, {
//       headers: {
//         "x-goog-api-key": process.env.GOOGLE_API_KEY,
//         "Content-Type": "application/json"
//       }
//     });

//     let text =
//       res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "Sorry, I could not generate an answer.";

//     return text;

//   } catch (err) {
//     console.error("Gemini error:", err.response?.data || err.message);
//     throw new Error("AI provider error");
//   }
// }

// module.exports = { getCoffeeAnswer };


const axios = require("axios");

const MODEL = "models/gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

async function getCoffeeAnswer(prompt) {
  const systemPrompt = `
You are Barist.AI — a world-class expert in coffee, brewing, beans, café culture, roasting,
machines, barista techniques, and drink preparation.

🎯 ANSWER FORMAT RULES (VERY IMPORTANT):

1. ALWAYS answer using formatted text:
   - Use headings (#, ##, ###)
   - Use bullet points
   - Use numbered steps
   - Use sub-headings
   - Use clean spacing

2. The answer should be:
   - Clear
   - Structured
   - Beginner-friendly
   - Easy to understand
   - Similar to a professional guide

3. When explaining methods:
   Include:
   - Title
   - Intro
   - Essentials
   - Step-by-step
   - Tips
   - Mistakes to avoid

4. RESTRICTED TOPIC:
   You must ONLY answer questions related to coffee.
   If the user asks something unrelated:
   Respond EXACTLY:
   "I can only answer questions related to coffee ☕."

Now answer the user's question below:
`;

  const body = {
    contents: [
      {
        parts: [{ text: systemPrompt }, { text: prompt }]
      }
    ]
  };

  try {
    const res = await axios.post(GEMINI_URL, body, {
      headers: {
        "x-goog-api-key": process.env.GOOGLE_API_KEY,
        "Content-Type": "application/json"
      }
    });

    return (
      res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not generate an answer."
    );

  } catch (err) {
    console.error("Gemini error:", err.response?.data || err.message);
    throw new Error("AI provider error");
  }
}

module.exports = { getCoffeeAnswer };
