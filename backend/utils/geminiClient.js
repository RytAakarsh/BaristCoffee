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


// const axios = require("axios");

// const MODEL = "models/gemini-2.0-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// let storedUserName = null; // 🔥 Memory: Saved once user provides name

// async function getCoffeeAnswer(prompt) {

//   // detect if user replied with a short name
//   if (!storedUserName && prompt.trim().split(" ").length <= 2 && prompt.length <= 15) {
//     storedUserName = prompt.trim();
//   }

//   const basePrompt = `
// You are Barist.Ai — an advanced AI expert in specialty coffee.

// RULES:
// 1. Only respond to COFFEE-related questions.
//    If message is unrelated reply:
//    "I am specialized exclusively in specialty coffee. How can I help you within the coffee domain?"

// 2. Format response as:
//    Title
//    Short explanation
//    Bullet points
//    Numbered brewing steps
//    Tips
//    (NO markdown like *, **, #)

// 3. Use:
//    - Celsius
//    - Grams
//    - ML
//    - Real brewing ratios

// 4. Personalization:
//    - If no name is known yet: ask only ONCE — "Hello! What's your name?"
//    - If name is known: respond normally and call user by name.
// `;

//   // 🔥 Logic: If we still don’t have their name
//   let finalPrompt = "";

//   if (!storedUserName) {
//     finalPrompt = `${basePrompt}\n\nUser message: "${prompt}"\n\nRespond: Ask for their name ONLY.`;
//   } else {
//     finalPrompt = `${basePrompt}\nUser name: ${storedUserName}\nUser question: ${prompt}\n\nRespond normally. Do NOT ask for name again.`;
//   }

//   const body = {
//     generationConfig: {
//       temperature: 0.3,
//       maxOutputTokens: 500,
//       topP: 0.9,
//     },
//     contents: [
//       {
//         role: "user",
//         parts: [{ text: finalPrompt }]
//       }
//     ]
//   };

//   try {
//     const res = await axios.post(GEMINI_URL, body, {
//       headers: {
//         "x-goog-api-key": process.env.GOOGLE_API_KEY,
//         "Content-Type": "application/json",
//       },
//       timeout: 15000
//     });

//     return (
//       res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "⚠️ I couldn't generate a response — try again."
//     );

//   } catch (err) {
//     console.error("Gemini API Error:", err?.response?.data || err.message);
//     return "⚠️ Barist.Ai is having trouble connecting. Please try again.";
//   }
// }

// module.exports = { getCoffeeAnswer };


// const axios = require("axios");

// const MODEL = "models/gemini-2.0-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// let storedUserName = null;

// async function getCoffeeAnswer(prompt) {

//   if (!storedUserName && prompt.trim().length <= 15 && prompt.split(" ").length <= 2) {
//     storedUserName = prompt.trim();
//   }

//   const systemPrompt = `
// You are Barist.Ai — expert in specialty coffee.
// Only answer coffee-related questions.

// Format style:
// Title
// Short intro
// Bullet points
// Steps
// Tips

// No markdown symbols like *, **, #, _.
// Use Celsius, grams, ml, ratios.
// If unsure, say so.

// Ask for name ONLY once. Use it afterward.
// `;

//   const finalPrompt = storedUserName
//     ? `${systemPrompt}\nUser: ${storedUserName}\nQuestion: ${prompt}`
//     : `${systemPrompt}\nUser message: "${prompt}"\nReply asking only their name.`;

//   try {
//     const res = await axios.post(GEMINI_URL,
//       {
//         contents: [{ role: "user", parts: [{ text: finalPrompt }] }],
//         generationConfig: { temperature: 0.35, maxOutputTokens: 550 }
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-goog-api-key": process.env.GOOGLE_API_KEY
//         },
//         timeout: 15000
//       });

//     return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";

//   } catch (err) {
//     return "⚠️ Barist.Ai is temporarily unavailable.";
//   }
// }

// module.exports = { getCoffeeAnswer };


// 

const axios = require("axios");

const MODEL = "models/gemini-2.0-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

let storedUserName = null; // memory persists until backend restarts

async function getCoffeeAnswer(prompt) {
  if (!storedUserName && prompt.trim().length <= 15 && !prompt.includes(" ")) {
    storedUserName = prompt.trim();
  }

  const rules = `
You are Barist.Ai — a premium specialty coffee assistant.

Rules:
- ONLY answer coffee related questions.
- If unrelated: respond with: "I only answer coffee-related questions ☕."
- Tone: friendly expert.
- Format response as:
  
  Title
  Short intro sentence
  Bullet list or numbered steps
  Tips

- Use: Celsius, grams, ML, brew ratios.
- Name personalization:
  - If name unknown → ask ONLY once: "Hello! What's your name?"
  - If known → use name naturally in answers.
`;

  const finalPrompt = storedUserName
    ? `${rules}\nUser name: ${storedUserName}\nUser question: ${prompt}`
    : `${rules}\nUser message: ${prompt}\nRespond by ONLY asking for their name first.`;

  try {
    const body = {
      generationConfig: {
        temperature: 0.3,
        topP: 0.8,
        maxOutputTokens: 600,
      },
      contents: [{ role: "user", parts: [{ text: finalPrompt }] }],
    };

    const res = await axios.post(GEMINI_URL, body, {
      headers: {
        "x-goog-api-key": process.env.GOOGLE_API_KEY,
        "Content-Type": "application/json",
      },
      timeout: 15000,
    });

    return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response generated.";
  } catch (err) {
    console.log("Gemini Error →", err?.response?.data || err.message);
    return "⚠️ Error contacting Barist.AI — please try again.";
  }
}

module.exports = { getCoffeeAnswer };
