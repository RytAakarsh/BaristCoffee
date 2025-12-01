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

// Title
//   Short intro
//   Bullet list or numbered steps
//   Tips

// - Use Celsius, grams, ML.
// - Personalization:
//   - If no name stored → ask once: "Hello! What's your name?"
//   - If name known → use naturally.

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


//You are Barist.Ai — expert in premium specialty coffee.

// const axios = require("axios");

// const MODEL = "models/gemini-2.0-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// let storedUserName = null;

// // Reset function (used when frontend refreshes)
// function resetSession() {
//   storedUserName = null;
// }

// async function getCoffeeAnswer(prompt) {

//   if (!storedUserName && prompt.trim().length <= 15 && prompt.split(" ").length <= 2) {
//     storedUserName = prompt.trim();
//   }

//   const systemPrompt = `
// You are Barist.Ai, an advanced AI expert in specialty coffee.
// Your role is to provide accurate, reliable, and technically grounded information on:
// 	•	Roasting & sensory analysis
// 	•	Brewing & extraction methods
// 	•	Coffee processing (natural, washed, honey, etc.)
// 	•	Terroir, varieties, and production
// 	•	Pairing & flavor profiles
// 	•	Equipment and market guidance



// Rules:
// - Only answer coffee-related queries.
// - If message is NOT about coffee → reply "I only answer coffee-related questions ☕."
// - Tone: friendly expert barista style.
// - Format:
//   Title
//   Short intro
//   Bullet points / numbered steps
//   Method of preparation
//   Tips

// - Units: Celsius, grams, ml, proper brew ratios.
// - Personalization:
//    If NO name yet → ask ONLY once: "Hello i am Barist.Ai ! What's your name?"
//    If name exists → use naturally.

// NEVER ask name again after stored once.

// `;

//   const finalPrompt = storedUserName
//     ? `${systemPrompt}\nUser: ${storedUserName}\nQuestion: ${prompt}`
//     : `${systemPrompt}\nUser message: "${prompt}"\n→ Respond asking ONLY their name.`;


//   try {
//     const res = await axios.post(GEMINI_URL,
//       {
//         contents: [{ role: "user", parts: [{ text: finalPrompt }] }],
//         generationConfig: { temperature: 0.35, maxOutputTokens: 600 }
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-goog-api-key": process.env.GOOGLE_API_KEY
//         },
//         timeout: 15000
//       });

//     return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
//   } catch {
//     return "⚠️ Barist.Ai is temporarily unavailable.";
//   }
// }

// module.exports = { getCoffeeAnswer, resetSession };


// const axios = require("axios");

// const MODEL = "models/gemini-2.0-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// let storedUserName = null;

// // Reset memory when frontend session resets
// function resetSession() {
//   storedUserName = null;
// }

// async function getCoffeeAnswer(prompt) {
  
//   const cleanedPrompt = prompt.trim();

//   // Detect if this is likely a name
//   const isLikelyName = cleanedPrompt.length <= 15 && cleanedPrompt.split(" ").length <= 2;

//   // Store name only once
//   if (!storedUserName && isLikelyName) {
//     storedUserName = cleanedPrompt;

//     // Immediately return welcome response instead of coffee validation rule
//     return `Hello ${storedUserName} ☕ — great to meet you!  
// How may I assist you with coffee today?`;
//   }

//   const systemPrompt = `
// You are Barist.Ai — a professional specialty coffee assistant.
// You help with:
// - Brew methods (pour-over, espresso, Aeropress, cold brew, moka pot)
// - Coffee processing, beans, roasts, origins
// - Equipment guidance and extraction troubleshooting
// - Flavor profiles and sensory science

// Rules:
// - ONLY answer questions related to coffee.
// - If unrelated: respond with "I only answer coffee-related questions ☕."
// - Tone: warm, professional, and confident — like a barista trainer.
// - Format response as:

// Title
// Short intro sentence
// Steps / bullet points
// Detailed method of preparation
// Tips


// - Use Celsius, grams, ML, and proper brew ratios.
// - Personalization:
//   - If name is known, use it naturally in responses (not every message).
//   - NEVER ask for the name again after stored.
// `;

//   const finalPrompt = storedUserName
//     ? `${systemPrompt}\nUser: ${storedUserName}\nQuestion: ${cleanedPrompt}`
//     : `${systemPrompt}\nUser message: "${cleanedPrompt}"\nReply ONLY asking their name politely.`;

//   try {
//     const res = await axios.post(
//       GEMINI_URL,
//       {
//         contents: [{ role: "user", parts: [{ text: finalPrompt }] }],
//         generationConfig: { temperature: 0.35, maxOutputTokens: 600 }
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-goog-api-key": process.env.GOOGLE_API_KEY
//         },
//         timeout: 15000
//       }
//     );

//     return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
//   } catch (err) {
//     return "⚠️ Barist.Ai is temporarily unavailable.";
//   }
// }

// module.exports = { getCoffeeAnswer, resetSession };



// const axios = require("axios");

// const MODEL = "models/gemini-2.0-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// let storedUserName = null;
// let storedLanguage = "en"; // default

// function resetSession() {
//   storedUserName = null;
//   storedLanguage = "en";
// }

// async function getCoffeeAnswer(prompt) {

//   const cleanedPrompt = prompt.trim();

//   // ---------- LANGUAGE DETECTION ----------
//   const portugueseWords = ["como", "que", "café", "tipos", "fazer", "preparo", "grãos", "qual"];
//   const englishWords = ["how", "what", "coffee", "types", "brew", "beans", "make"];

//   const isPortuguese =
//     portugueseWords.some(word => cleanedPrompt.toLowerCase().includes(word));

//   const isEnglish =
//     englishWords.some(word => cleanedPrompt.toLowerCase().includes(word));

//   if (isPortuguese) storedLanguage = "pt";
//   else if (isEnglish) storedLanguage = "en";

//   // ----- Detect if message is likely a NAME (only once) -----
//   const isLikelyName =
//     cleanedPrompt.length <= 12 &&
//     cleanedPrompt.split(" ").length <= 2 &&
//     !cleanedPrompt.toLowerCase().includes("?") &&
//     !portugueseWords.includes(cleanedPrompt.toLowerCase());

//   if (!storedUserName && isLikelyName) {
//     storedUserName = cleanedPrompt;

//     return storedLanguage === "pt"
//       ? `Olá ${storedUserName} ☕ — prazer em conhecê-lo!\nComo posso te ajudar com café hoje?`
//       : `Hello ${storedUserName} ☕ — great to meet you!\nHow may I assist you with coffee today?`;
//   }

//   // ---------- SYSTEM ROLE ----------
//   const systemPrompt = `
// You are Barist.Ai — a specialist in specialty coffee education.

// Speak ONLY in the user's language:
// - If they are Portuguese → reply fully in Portuguese.
// - If they are English → reply fully in English.

// Your expertise includes:
// - Brewing methods (espresso, V60, Aeropress, cold brew, moka)
// - Sensory science, roasting, extraction
// - Coffee equipment & troubleshooting
// - Bean origin and processing (washed, honey, natural)

// Rules:
// - ONLY answer coffee-related questions.
// - If message is unrelated → respond with:
//   English → "I only answer coffee-related questions ☕."
//   Portuguese → "Eu só respondo perguntas relacionadas a café ☕."

// Response style:
// - Title (bold)
// - Short introduction
// - Bullet points or numbered steps
// - Tips section
// - Use metrics: Celsius, grams, ml, brew ratios

// Personalization:
// - If username exists, use occasionally (not every reply).

// IMPORTANT:
// Never ask for the user's name again once stored.
// `;

//   const finalPrompt = `
// Language: ${storedLanguage}
// User Name: ${storedUserName || "Unknown"}
// Message: "${cleanedPrompt}"

// Respond following all system rules above.
// `;

//   try {
//     const res = await axios.post(
//       GEMINI_URL,
//       {
//         contents: [{ role: "user", parts: [{ text: `${systemPrompt}\n${finalPrompt}` }] }],
//         generationConfig: { temperature: 0.35, maxOutputTokens: 600 }
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-goog-api-key": process.env.GOOGLE_API_KEY
//         },
//         timeout: 15000
//       }
//     );

//     return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
//       (storedLanguage === "pt"
//         ? "⚠️ Não consegui gerar uma resposta."
//         : "⚠️ I couldn't generate a response.");
        
//   } catch (err) {
//     return storedLanguage === "pt"
//       ? "⚠️ Barist.Ai está temporariamente indisponível."
//       : "⚠️ Barist.Ai is temporarily unavailable.";
//   }
// }

// module.exports = { getCoffeeAnswer, resetSession };


// const axios = require("axios");

// const MODEL = "models/gemini-2.0-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// let storedUserName = null;
// let detectedLanguage = "en"; // default

// function resetSession() {
//   storedUserName = null;
//   detectedLanguage = "en";
// }

// function detectLang(text) {
//   const ptWords = ["como", "fazer", "fale", "sobre", "método", "café", "por favor"];
//   const enWords = ["how", "make", "tell", "coffee", "method", "please"];

//   const lower = text.toLowerCase();

//   if (ptWords.some(w => lower.includes(w))) return "pt";
//   if (enWords.some(w => lower.includes(w))) return "en";

//   return detectedLanguage; 
// }

// async function getCoffeeAnswer(prompt) {
//   const cleanedPrompt = prompt.trim();
//   detectedLanguage = detectLang(cleanedPrompt);

//   // 🔥 WELCOME MESSAGE BEFORE NAME IS GIVEN
//   if (!storedUserName) {
//     const isLikelyName = cleanedPrompt.length <= 15 && cleanedPrompt.split(" ").length <= 2;

//     if (isLikelyName) {
//       storedUserName = cleanedPrompt;

//       return detectedLanguage === "pt"
//         ? `Olá ${storedUserName} ☕ — prazer conhecer você!\nComo posso te ajudar com café hoje?`
//         : `Hello ${storedUserName} ☕ — great to meet you!\nHow may I assist you with coffee today?`;
//     }

//     return detectedLanguage === "pt"
//       ? "Olá! Sou o Barist.AI 😊 Qual é o seu nome?"
//       : "Hello! I'm Barist.AI 😊 What's your name?";
//   }

//   // 🧠 SYSTEM PROMPT WITH LANGUAGE MODE
//   const systemPrompt = detectedLanguage === "pt"
//     ? `
// Você é Barist.AI — especialista profissional em cafés especiais.

// Regras:
// - Responda SOMENTE perguntas relacionadas a café.
// - Se a pergunta NÃO for sobre café → responda: "Eu só respondo perguntas sobre café ☕."
// - Estilo: amigável, técnico e confiante, como um barista especialista.

// Formato:
// Título em negrito
// Uma pequena introdução
// Passos ou bullet points
// Dicas finais

// Use: Celsius, gramas, ML e proporções corretas.
// Nome do usuário: ${storedUserName}
// Pergunta: ${cleanedPrompt}
// `
//     : `
// You are Barist.AI — a professional specialty coffee assistant.

// Rules:
// - ONLY answer coffee-related questions.
// - If question is NOT about coffee → reply: "I only answer coffee-related questions ☕."
// - Tone: warm, expert, confident — like a barista trainer.

// Format:
// Bold Title
// Short intro
// Steps or bullet points
// Final tips

// Use Celsius, grams, ML, proper brew ratios.
// User name: ${storedUserName}
// Question: ${cleanedPrompt}
// `;

//   try {
//     const res = await axios.post(
//       GEMINI_URL,
//       {
//         contents: [{ role: "user", parts: [{ text: systemPrompt }] }],
//         generationConfig: { temperature: 0.3, maxOutputTokens: 650 }
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-goog-api-key": process.env.GOOGLE_API_KEY
//         }
//       }
//     );

//     return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response.";
//   } catch (err) {
//     console.log("Gemini error:", err);
//     return detectedLanguage === "pt"
//       ? "⚠️ Erro ao conectar com Barist.AI — tente novamente."
//       : "⚠️ Error connecting to Barist.AI — please try again.";
//   }
// }

// module.exports = { getCoffeeAnswer, resetSession };


// const axios = require("axios");

// const MODEL = "models/gemini-2.0-flash";
// const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

// let firstMessageSent = false;
// let detectedLanguage = "en"; // default

// function resetSession() {
//   firstMessageSent = false;
//   detectedLanguage = "en";
// }

// function detectLang(text) {
//   const ptWords = ["como", "fazer", "fale", "sobre", "método", "café", "por favor"];
//   const enWords = ["how", "make", "tell", "coffee", "method", "please"];

//   const lower = text.toLowerCase();

//   if (ptWords.some(w => lower.includes(w))) return "pt";
//   if (enWords.some(w => lower.includes(w))) return "en";

//   return detectedLanguage;
// }

// async function getCoffeeAnswer(prompt) {
//   const cleanedPrompt = prompt.trim();
//   detectedLanguage = detectLang(cleanedPrompt);

//   // --- NEW LOGIC: FIRST USER MESSAGE ALWAYS TRIGGERS WELCOME ---
//   if (!firstMessageSent) {
//     firstMessageSent = true;

//     return detectedLanguage === "pt"
//       ? "Olá! Sou o Barist.AI 😊 Como posso te ajudar com café hoje?"
//       : "Hello! I'm Barist.AI 😊 How may I assist you with coffee today?";
//   }

//   // --- SYSTEM PROMPT (NO NAME FEATURE) ---
//   const systemPrompt = detectedLanguage === "pt"
//     ? `
// Você é Barist.AI — especialista profissional em cafés especiais.

// Regras:
// - Responda SOMENTE perguntas relacionadas a café.
// - Se a pergunta NÃO for sobre café → responda: "Eu só respondo perguntas sobre café ☕."
// - Estilo: amigável, técnico e confiante, como um barista especialista.

// Formato:
// - Título em negrito
// - Introdução curta
// - Passos ou bullet points
// - Dicas finais

// Use sempre Celsius, gramas, ML e proporções corretas.

// Pergunta do usuário: ${cleanedPrompt}
// `
//     : `
// You are Barist.AI — a professional specialty coffee assistant.

// Rules:
// - ONLY answer coffee-related questions.
// - If question is NOT about coffee → reply: "I only answer coffee-related questions ☕."
// - Tone: warm, expert, confident — like a coffee trainer.

// Format:
// - Bold title
// - Short intro
// - Steps or bullet points
// - Final tips

// Use Celsius, grams, ML, proper brew ratios.

// User question: ${cleanedPrompt}
// `;

//   try {
//     const res = await axios.post(
//       GEMINI_URL,
//       {
//         contents: [{ role: "user", parts: [{ text: systemPrompt }] }],
//         generationConfig: { temperature: 0.3, maxOutputTokens: 650 }
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-goog-api-key": process.env.GOOGLE_API_KEY
//         }
//       }
//     );

//     return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response.";
//   } catch (err) {
//     console.log("Gemini error:", err);
//     return detectedLanguage === "pt"
//       ? "⚠️ Erro ao conectar com Barist.AI — tente novamente."
//       : "⚠️ Error connecting to Barist.AI — please try again.";
//   }
// }

// module.exports = { getCoffeeAnswer, resetSession };


const axios = require("axios");

const MODEL = "models/gemini-2.0-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/${MODEL}:generateContent`;

let firstMessageSent = false;
let detectedLanguage = "en"; // default

function resetSession() {
  firstMessageSent = false;
  detectedLanguage = "en";
}

function detectLang(text) {
  const ptWords = ["como", "fazer", "sobre", "método", "café", "por favor", "tipo"];
  const enWords = ["how", "make", "coffee", "method", "please", "brew"];

  const lower = text.toLowerCase();

  if (ptWords.some(w => lower.includes(w))) return "pt";
  if (enWords.some(w => lower.includes(w))) return "en";

  return detectedLanguage;
}

async function getCoffeeAnswer(prompt) {
  const cleanedPrompt = prompt.trim();
  detectedLanguage = detectLang(cleanedPrompt);

  // --- FIRST MESSAGE RESPONSE (UNCHANGED) ---
  if (!firstMessageSent) {
    firstMessageSent = true;
    return detectedLanguage === "pt"
      ? "Olá! Sou o Barist.AI 😊 Como posso te ajudar com café hoje?"
      : "Hello! I'm Barist.AI 😊 How may I assist you with coffee today?";
  }

  // --- NEW UPDATED SYSTEM INSTRUCTIONS (Based on your rules) ---
  const systemPrompt = detectedLanguage === "pt"
    ? `
<INSTRUÇÕES>
Você é "Barista.Ai", um assistente virtual especializado em cafés especiais.

🔧 *REGRAS IMPORTANTES:*
1. Responda *APENAS* perguntas relacionadas ao universo do café.
2. Se a pergunta *não* for sobre café, responda EXATAMENTE:
   👉 "Peço desculpas, mas sou especialista apenas em café ☕ e não tenho conhecimento sobre isso."
3. Sempre use *Celsius, gramas, mililitros (ML)* e proporções corretas (Ex: 1:15).
4. Tom amigável, profissional e direto — sem longas introduções.
5. Respostas devem ser detalhadas, mas objetivas.

📌 *Áreas de conhecimento:*
- Tipos de café (origem, variedades, sensoriais)
- Terroir e regiões produtoras
- Torra (clara, média, escura e efeitos)
- Métodos de preparo
- Marcas, preços, recomendações e onde comprar cafés especiais

🧩 *FORMATO OBRIGATÓRIO DA RESPOSTA:*
1. **Título claro em negrito**
2. Breve frase introdutória
3. Lista com tópicos estruturados (numerada ou bullet points)
4. Dica final
5. Até 3 emojis (☕, 🌱, 🔥 etc.)
6. Inclua referências (quando necessário)
</INSTRUÇÕES>

❓ Pergunta do usuário:
"${cleanedPrompt}"
    `
    : `
<INSTRUCTIONS>
You are "Barista.Ai", a virtual assistant specialized in specialty coffee.

🔧 *RULES:*
1. Answer *ONLY* coffee-related questions.
2. If the question is *not* about coffee, respond EXACTLY with:
   👉 "I apologize, but I am a coffee expert ☕ and do not have knowledge about that."
3. Use *Celsius, grams, milliliters (ML), and correct brew ratios (e.g., 1:15).*
4. Tone must be professional, friendly, and concise — avoid long intros.

📌 *Knowledge Scope:*
- Coffee origins, beans, flavor profiles
- Terroir and growing regions
- Roast levels and flavor impact
- Brewing methods and optimization
- Best brands and where to buy specialty coffee

🧩 *REQUIRED RESPONSE FORMAT:*
1. **Bold title**
2. Short intro sentence
3. Numbered or bulleted structured response
4. Final tip
5. Max 3 emojis
6. Include references when citing products or research
</INSTRUCTIONS>

❓ User question:
"${cleanedPrompt}"
`;

  try {
    const res = await axios.post(
      GEMINI_URL,
      {
        contents: [{ role: "user", parts: [{ text: systemPrompt }] }],
        generationConfig: { temperature: 0.35, maxOutputTokens: 750 }
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GOOGLE_API_KEY
        }
      }
    );

    return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response.";
  } catch (err) {
    console.log("Gemini error:", err);
    return detectedLanguage === "pt"
      ? "⚠️ Erro ao conectar com Barist.AI — tente novamente."
      : "⚠️ Error connecting to Barist.AI — please try again.";
  }
}

module.exports = { getCoffeeAnswer, resetSession };
