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


// const axios = require("axios");

// const MODEL = "models/gemini-2.5-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// async function getCoffeeAnswer(prompt) {
//   const systemPrompt = `
// You are Barist.AI — a world-class expert in coffee, brewing, beans, café culture, roasting,
// machines, barista techniques, and drink preparation.

// 🎯 ANSWER FORMAT RULES (VERY IMPORTANT):

// 1. ALWAYS answer using formatted text:
//    -  DO NOT use markdown characters like **, *, #, _, > .
//    - Use bullet points
//    - Use numbered steps
//    - Use sub-headings
//    - Use clean spacing

// 2. The answer should be:
//    - Clear
//    - Structured
//    - Beginner-friendly
//    - Easy to understand
//    - Similar to a professional guide

// 3. When explaining methods:
//    Include:
//    - Title
//    - Intro
//    - Essentials
//    - Step-by-step
//    - Tips
//    - Mistakes to avoid

// 4. RESTRICTED TOPIC:
//    You must ONLY answer questions related to coffee.
//    If the user asks something unrelated:
//    Respond EXACTLY:
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

//     return (
//       res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "Sorry, I could not generate an answer."
//     );

//   } catch (err) {
//     console.error("Gemini error:", err.response?.data || err.message);
//     throw new Error("AI provider error");
//   }
// }

// module.exports = { getCoffeeAnswer };


// const axios = require("axios");

// const MODEL = "models/gemini-2.5-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;


// async function getCoffeeAnswer(prompt, userName = null) {

//   // --- SYSTEM PROMPT (Updated High-Accuracy Coffee Expert Rules) ---
//   const systemPrompt = `
// You are Barist.Ai — an advanced AI expert in specialty coffee.

// ROLE:
// Your job is to provide accurate, reliable, structured, and technically correct information about:
// - Coffee brewing & extraction
// - Roasting & sensory evaluation
// - Equipment guidance
// - Processing methods (washed, natural, honey, anaerobic)
// - Bean varieties, terroir and regions
// - Drink preparation and flavor pairing

// RULES:
// 1) Coffee-only domain.
//    If the user asks anything unrelated to coffee, respond:
//    "I am specialized exclusively in specialty coffee. How can I help you within the coffee domain?"

// 2) Response Protocol:
//    - Interpret the question literally.
//    - Never invent facts.
//    - If uncertain, admit uncertainty.
//    - Validate logic before finalizing the response.

// 3) Style:
//    - DO NOT use markdown symbols such as *, #, **, >, _
//    - Use clean formatting with:
//         Title
//         Overview
//         Bullet points
//         Numbered steps
//         Optional tips
//    - Use grams, milliliters, Celsius, extraction ratios.
//    - Provide multiple method options where appropriate.
//    - Suggest budget variations when relevant.

// 4) Personalization:
//    - On first response: introduce yourself and ask for the user's name.
//    - After the name is given, address the user using their name in all messages.
//    - Adapt technical depth to the user's experience based on context.

// Now generate the final answer to the user's request below.
// `;

//   // --- REQUEST BODY ---
//   const body = {
//     generationConfig: {
//       temperature: 0.4,       // Lower = more accurate + faster
//       maxOutputTokens: 650,   // Good balance between speed + detail
//       topP: 0.8,
//     },
//     contents: [
//       {
//         role: "system",
//         parts: [{ text: systemPrompt }]
//       },
//       {
//         role: "user",
//         parts: [{ text: userName ? `User: ${userName}\n${prompt}` : prompt }]
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

//     return (
//       res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "I could not generate a valid answer."
//     );

//   } catch (err) {
//     console.error("Gemini API Error:", err.response?.data || err.message);
//     return "There was an issue contacting Barist.Ai. Please try again.";
//   }
// }

// module.exports = { getCoffeeAnswer };


// const axios = require("axios");

// const MODEL = "models/gemini-2.5-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// async function getCoffeeAnswer(prompt, userName = null) {

//   const systemPrompt = `
// You are Barist.Ai, an expert in specialty coffee.

// RULES:
// - Only answer coffee-related topics.
// - If user asks unrelated topics reply: 
// "I am specialized exclusively in specialty coffee. How can I help you within the coffee domain?"
// - No markdown symbols (*, _, >, #).
// - Format responses with:
//   Title
//   Overview
//   Bullet points
//   Steps
//   Tips
// - Use grams, ml and Celsius.
// - Provide multiple method options where appropriate.
// - Ask the user's name on first response.
// - After they provide it, address them by name in every response.
// `;

//   const finalQuery = userName
//     ? `${systemPrompt}\n\nUser Name: ${userName}\n\nUser Question: ${prompt}`
//     : `${systemPrompt}\n\nUser Question: ${prompt}`;

//   const body = {
//     model: MODEL, // NEW REQUIRED FIELD
//     generationConfig: {
//       maxOutputTokens: 650,
//       temperature: 0.4,
//       topP: 0.8,
//     },
//     contents: [
//       {
//         role: "user",
//         parts: [{ text: finalQuery }]
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

//     return (
//       res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "I could not generate a valid answer."
//     );

//   } catch (err) {
//     console.error("Gemini API Error:", err.response?.data || err.message);
//     return "There was an issue contacting Barist.Ai. Please try again.";
//   }
// }

// module.exports = { getCoffeeAnswer };


// const axios = require("axios");

// const MODEL = "models/gemini-2.5-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// async function getCoffeeAnswer(prompt, userName = null) {

//   const systemPrompt = `
// You are Barist.Ai, an advanced AI expert in specialty coffee.

// Core Rules:
// 1. Coffee-only responses. If the question is unrelated to coffee reply:
//    "I am specialized exclusively in specialty coffee. How can I help you within the coffee domain?"

// 2. Accuracy Priority:
//    - Do NOT invent facts.
//    - If unsure, say so.
//    - Apply real-world brewing parameters (grams, ML, Celsius).

// 3. Tone:
//    - Clear, structured, beginner-friendly expert.
//    - Format using title → bullets → numbered steps → tips (NO markdown symbols like *, **, #)

// 4. Personalization:
//    - First reply must ask the user’s name.
//    - After user responds, use their name in future replies.
// `;

//   const body = {
//     generationConfig: {
//       temperature: 0.2,
//       maxOutputTokens: 650,
//       topP: 0.8,
//     },
//     contents: [
//       {
//         role: "user", // REQUIRED FIX (System prompt now becomes a user message)
//         parts: [{ text: systemPrompt }]
//       },
//       {
//         role: "user",
//         parts: [{ text: userName ? `User: ${userName}\n${prompt}` : prompt }]
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

//     return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
//       "Apologies — I couldn't generate a response. Please try again.";

//   } catch (err) {
//     console.error("Gemini API Error:", err?.response?.data || err.message);
//     return "⚠️ Barist.Ai could not reach the server. Try again.";
//   }
// }

// module.exports = { getCoffeeAnswer };



const axios = require("axios");

// ✅ Correct latest stable model
const MODEL = "gemini-2.0-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

async function getCoffeeAnswer(prompt, userName = null) {

  const systemPrompt = `
You are Barist.Ai, an advanced AI expert in specialty coffee.

RULES:
1. Coffee-related responses only. If question is unrelated say:
   "I am specialized exclusively in specialty coffee. How can I help you within the coffee domain?"

2. Accuracy first:
   - No invented facts
   - Use real measurements (grams, ml, Celsius)
   - If unsure: say so

3. Format:
   Title
   Short explanation
   Bullet points
   Numbered steps
   Tips
   (No markdown symbols like **, *, #, >)

4. Personalization:
   - First message must ask user’s name
   - After user gives a name, address them personally
`;

  // 🏎️ Faster response performance tweaks
  const body = {
    model: MODEL,
    generationConfig: {
      maxOutputTokens: 350,   // Reduced for speed
      temperature: 0.3,
    },
    contents: [
      { role: "model", parts: [{ text: systemPrompt }] },
      { role: "user", parts: [{ text: userName ? `User: ${userName}\n${prompt}` : prompt }] }
    ]
  };

  try {
    const res = await axios.post(GEMINI_URL, body, {
      headers: {
        "x-goog-api-key": process.env.GOOGLE_API_KEY,
        "Content-Type": "application/json"
      }
    });

    return res?.data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "⚠️ Barist.Ai could not respond — please try again.";
      
  } catch (err) {
    console.error("Gemini API Error:", err.response?.data || err.message);
    return "⚠️ Barist.Ai is thinking too long — please try again.";
  }
}

module.exports = { getCoffeeAnswer };
