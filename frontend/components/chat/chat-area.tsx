// "use client"

// import { useLanguage } from "@/lib/language-context"

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage()

//   const heroMessages = {
//     en: "Welcome to your premium coffee experience. I'm Barist.Ai, your expert guide to everything coffee. Ask about brewing methods, bean origins, flavor profiles, or coffee culture—I'm here to inspire your perfect cup.",
//     pt: "Bem-vindo à sua experiência premium de café. Sou o Barist.Ai, seu guia especialista em tudo relacionado a café. Pergunte sobre métodos de preparo, origens dos grãos, perfis de sabor ou cultura do café—estou aqui para inspirar sua xícara perfeita.",
//   }

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   }

//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-gradient-to-b from-background via-background to-secondary/20">
//       {messages.length === 0 ? (
//         <div className="h-full flex flex-col items-center justify-center text-center">
//           <div className="mb-8 animate-slide-up">
//             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center mb-6 shadow-premium animate-pulse-glow">
//               <img src="/logo.png" alt="Barist.Ai" className="w-12 h-12 object-contain animate-rotate-slow" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
//               {welcomeTitles[language as keyof typeof welcomeTitles]}
//             </h2>
//             <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto font-light">
//               {heroMessages[language as keyof typeof heroMessages]}
//             </p>
//           </div>

//           {/* Coffee tips grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 w-full max-w-2xl">
//             {[
//               { icon: "🌍", title: language === "en" ? "Bean Origins" : "Origens dos Grãos" },
//               { icon: "⏱️", title: language === "en" ? "Brew Timing" : "Tempo de Preparo" },
//               { icon: "🔥", title: language === "en" ? "Temperature" : "Temperatura" },
//               { icon: "💧", title: language === "en" ? "Water Ratio" : "Proporção de Água" },
//             ].map((tip, idx) => (
//               <div
//                 key={idx}
//                 className="p-4 rounded-lg border border-border/30 bg-card/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 animate-slide-up"
//                 style={{ animationDelay: `${idx * 100}ms` }}
//               >
//                 <span className="text-2xl block mb-2">{tip.icon}</span>
//                 <p className="text-sm font-medium text-foreground">{tip.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <>
//           {messages.map((msg, idx) => (
//             <div
//               key={msg.id}
//               className={`flex animate-fade-in ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//               style={{ animationDelay: `${idx * 50}ms` }}
//             >
//               <div
//                 className={`max-w-xs lg:max-w-2xl px-5 py-4 rounded-2xl ${
//                   msg.sender === "user"
//                     ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-premium"
//                     : "bg-card border border-border/40 text-foreground rounded-bl-none backdrop-blur-sm"
//                 }`}
//               >
//                 <p className="text-sm lg:text-base leading-relaxed whitespace-pre-wrap font-medium">{msg.text}</p>
//               </div>
//             </div>
//           ))}
//           {isLoading && (
//             <div className="flex justify-start animate-slide-up">
//               <div className="bg-card border border-border/40 px-5 py-4 rounded-2xl rounded-bl-none backdrop-blur-sm">
//                 <div className="flex gap-2">
//                   <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-bounce"></div>
//                   <div
//                     className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.1s" }}
//                   ></div>
//                   <div
//                     className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.2s" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   )
// }


// "use client";
// import MessageBubble from "./MessageBubble.jsx";

// export default function ChatArea({ messages, isLoading }) {
//   return (
//     <div className="flex flex-col p-6 space-y-2 overflow-y-auto">
//       {messages.map((msg) => (
//         <MessageBubble key={msg.id} text={msg.text} isUser={msg.sender === "user"} />
//       ))}

//       {isLoading && (
//         <MessageBubble text="Typing…" isUser={false} />
//       )}
//     </div>
//   );
// }


// "use client";

// import { useLanguage } from "@/lib/language-context";

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage();

//   const heroMessages = {
//     en: "Welcome to your premium coffee experience. I'm Barist.Ai, your expert guide to everything coffee. Ask about brewing methods, bean origins, flavor profiles, or coffee culture—I'm here to inspire your perfect cup.",
//     pt: "Bem-vindo à sua experiência premium de café. Sou o Barist.Ai, seu guia especialista em tudo relacionado a café. Pergunte sobre métodos de preparo, origens dos grãos, perfis de sabor ou cultura do café—estou aqui para inspirar sua xícara perfeita.",
//   };

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   };

//   // --- FORMAT AI MESSAGES (bold + cleaner structure) ---
//   const formatText = (text) => {
//     if (!text) return "";

//     return text
//       .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold
//       .replace(/\n\n/g, "<br/><br/>") // paragraph breaks
//       .replace(/\n/g, "<br/>") // line breaks
//       .trim();
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-gradient-to-b from-background via-background to-secondary/20">
//       {messages.length === 0 ? (
//         // ---------------- HERO CONTENT ----------------
//         <div className="h-full flex flex-col items-center justify-center text-center">
//           <div className="mb-8 animate-slide-up">
//             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center mb-6 shadow-premium animate-pulse-glow">
//               <img src="/logo.png" alt="Barist.Ai" className="w-12 h-12 object-contain animate-rotate-slow" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
//               {welcomeTitles[language]}
//             </h2>
//             <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto font-light">
//               {heroMessages[language]}
//             </p>
//           </div>

//           {/* COFFEE TIPS */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 w-full max-w-2xl">
//             {[
//               { icon: "🌍", title: language === "en" ? "Bean Origins" : "Origens dos Grãos" },
//               { icon: "⏱️", title: language === "en" ? "Brew Timing" : "Tempo de Preparo" },
//               { icon: "🔥", title: language === "en" ? "Temperature" : "Temperatura" },
//               { icon: "💧", title: language === "en" ? "Water Ratio" : "Proporção de Água" },
//             ].map((tip, idx) => (
//               <div
//                 key={idx}
//                 className="p-4 rounded-lg border border-border/30 bg-card/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 animate-slide-up"
//                 style={{ animationDelay: `${idx * 100}ms` }}
//               >
//                 <span className="text-2xl block mb-2">{tip.icon}</span>
//                 <p className="text-sm font-medium text-foreground">{tip.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         // ---------------- CHAT MESSAGES ----------------
//         <>
//           {messages.map((msg, idx) => (
//             <div
//               key={msg.id}
//               className={`flex animate-fade-in ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//               style={{ animationDelay: `${idx * 50}ms` }}
//             >
//               <div
//                 className={`max-w-xs lg:max-w-2xl px-5 py-4 rounded-2xl text-[19px] leading-relaxed whitespace-pre-wrap
//                   ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-premium"
//                       : "bg-card border border-border/40 text-foreground rounded-bl-none backdrop-blur-sm"
//                   }`}
//                 dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
//               />
//             </div>
//           ))}

//           {/* ---- TYPING INDICATOR ---- */}
//           {isLoading && (
//             <div className="flex justify-start animate-slide-up">
//               <div className="bg-card border border-border/40 px-5 py-4 rounded-2xl rounded-bl-none backdrop-blur-sm">
//                 <div className="flex gap-2">
//                   <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-bounce"></div>
//                   <div
//                     className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.1s" }}
//                   ></div>
//                   <div
//                     className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-bounce"
//                     style={{ animationDelay: "0.2s" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useLanguage } from "@/lib/language-context";
// import { useState } from "react";
// import { Clipboard, ClipboardCheck } from "lucide-react";

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage();
//   const [copiedId, setCopiedId] = useState(null);

//   const heroMessages = {
//     en: "Welcome to your premium coffee experience. I'm Barist.Ai, your expert guide to everything coffee. Ask about brewing methods, bean origins, flavor profiles, or coffee culture—I'm here to inspire your perfect cup.",
//     pt: "Bem-vindo à sua experiência premium de café. Sou o Barist.Ai, seu guia especialista em tudo relacionado a café. Pergunte sobre métodos de preparo, origens dos grãos, perfis de sabor ou cultura do café—estou aqui para inspirar sua xícara perfeita.",
//   };

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   };

//   // ---- Format Bold + line breaks ----
//   const formatText = (text) => {
//     if (!text) return "";
//     return text
//       .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
//       .replace(/\n\n/g, "<br/><br/>")
//       .replace(/\n/g, "<br/>")
//       .trim();
//   };

//   // ---- Copy Clean Text ----
//   const copyMessage = (rawText, id) => {
//     const clean = rawText.replace(/\*\*/g, "").trim();
//     navigator.clipboard.writeText(clean);
//     setCopiedId(id);

//     setTimeout(() => setCopiedId(null), 1800);
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-gradient-to-b from-background via-background to-secondary/20">
//       {messages.length === 0 ? (
//         <>
//           {/* ---------------------------------- HERO ---------------------------------- */}
//           <div className="h-full flex flex-col items-center justify-center text-center">
//             <div className="mb-8 animate-slide-up">
//               <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center mb-6 shadow-premium animate-pulse-glow">
//                 <img src="/logo.png" alt="Barist.Ai" className="w-12 h-12 object-contain animate-rotate-slow" />
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
//                 {welcomeTitles[language]}
//               </h2>
//               <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto font-light">
//                 {heroMessages[language]}
//               </p>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           {/* ---------------------------------- CHAT BUBBLES ---------------------------------- */}
//           {messages.map((msg, idx) => (
//             <div
//               key={msg.id}
//               className={`relative flex animate-fade-in ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//               style={{ animationDelay: `${idx * 50}ms` }}
//             >
//               <div
//                 className={`relative max-w-xs lg:max-w-2xl px-5 py-4 rounded-2xl text-[19px] leading-relaxed whitespace-pre-wrap
//                   ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-premium"
//                       : "bg-card border border-border/40 text-foreground rounded-bl-none backdrop-blur-sm"
//                   }`}
//                 dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
//               />

//               {/* ---- COPY BUTTON ---- */}
//               <button
//                 onClick={() => copyMessage(msg.text, msg.id)}
//                 className={`absolute 
//                   -bottom-4 
//                   ${msg.sender === "user" ? "right-2" : "left-2"} 
//                   p-1.5 bg-white/80 backdrop-blur-lg rounded-full shadow-sm 
//                   border border-gray-200
//                   hover:scale-110 active:scale-95 transition-all`}
//                 style={{
//                   transform: "translateY(50%)",
//                 }}
//               >
//   {copiedId === msg.id ? (
//     <ClipboardCheck size={17} className="text-green-600" />
//   ) : (
//     <Clipboard size={17} className="text-gray-600" />
//   )}
// </button>
//             </div>
//           ))}

//           {/* ---- TYPING DOTS ---- */}
//           {isLoading && (
//             <div className="flex justify-start animate-slide-up">
//               <div className="bg-card border border-border/40 px-5 py-4 rounded-2xl rounded-bl-none backdrop-blur-sm">
//                 <div className="flex gap-2">
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-100"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-200"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useLanguage } from "@/lib/language-context";
// import { useEffect, useState } from "react";
// import { Clipboard, ClipboardCheck } from "lucide-react";

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage();
//   const [copiedId, setCopiedId] = useState<string | null>(null);

//   // For streaming effect
//   const [displayText, setDisplayText] = useState({}); // { id: textShownSoFar }

//   useEffect(() => {
//     const latestMsg = messages[messages.length - 1];

//     if (!latestMsg || latestMsg.sender === "user") return;

//     if (displayText[latestMsg.id]) return; // already streaming

//     let i = 0;
//     const text = latestMsg.text;
//     const interval = setInterval(() => {
//       i++;
//       setDisplayText((prev) => ({
//         ...prev,
//         [latestMsg.id]: text.slice(0, i),
//       }));
//       if (i >= text.length) clearInterval(interval);
//     }, 18); // typing speed

//     return () => clearInterval(interval);
//   }, [messages]);

//   const heroMessages = {
//     en: "Welcome to your premium coffee experience...",
//     pt: "Bem-vindo à sua experiência premium de café..."
//   };

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   };

//   // Text formatter
//   const formatText = (text: string) => {
//     if (!text) return "";
//     return text
//       .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
//       .replace(/\n\n/g, "<br/><br/>")
//       .replace(/\n/g, "<br/>")
//       .trim();
//   };

//   const copyMessage = (rawText: string, id: string) => {
//     const clean = rawText.replace(/\*\*/g, "").trim();
//     navigator.clipboard.writeText(clean);
//     setCopiedId(id);
//     setTimeout(() => setCopiedId(null), 1800);
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-gradient-to-b from-background via-background to-secondary/20">
//       {messages.length === 0 ? (
//         <div className="h-full flex flex-col items-center justify-center text-center">
//           <div className="mb-8 animate-slide-up">
//             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center mb-6 shadow-premium animate-pulse-glow">
//               <img src="/logo.png" alt="Barist.Ai" className="w-12 h-12 object-contain animate-rotate-slow" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
//               {welcomeTitles[language]}
//             </h2>
//             <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto font-light">
//               {heroMessages[language]}
//             </p>
//           </div>
//         </div>
//       ) : (
//         <>
//           {messages.map((msg, idx) => {
//             const textToDisplay =
//               msg.sender === "ai" ? displayText[msg.id] || "" : msg.text;

//             return (
//               <div
//                 key={msg.id}
//                 className={`relative flex animate-fade-in ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//                 style={{ animationDelay: `${idx * 50}ms` }}
//               >
//                 <div
//                   className={`relative max-w-xs lg:max-w-2xl px-5 py-4 rounded-2xl text-[19px] leading-relaxed whitespace-pre-wrap 
//                   ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-premium"
//                       : "bg-card border border-border/40 text-foreground rounded-bl-none backdrop-blur-sm"
//                   }`}
//                   dangerouslySetInnerHTML={{ __html: formatText(textToDisplay) }}
//                 />

//                 {/* ---- COPY BUTTON ---- */}
//                 {msg.sender !== "user" && (
//                   <button
//                     onClick={() => copyMessage(msg.text, msg.id)}
//                     className="absolute -bottom-4 left-2 p-1.5 bg-white/80 backdrop-blur-lg rounded-full shadow-sm 
//                     border border-gray-200 hover:scale-110 active:scale-95 transition-all"
//                     style={{ transform: "translateY(50%)" }}
//                   >
//                     {copiedId === msg.id ? (
//                       <ClipboardCheck size={17} className="text-green-600" />
//                     ) : (
//                       <Clipboard size={17} className="text-gray-600" />
//                     )}
//                   </button>
//                 )}
//               </div>
//             );
//           })}

//           {isLoading && (
//             <div className="flex justify-start animate-slide-up">
//               <div className="bg-card border border-border/40 px-5 py-4 rounded-2xl rounded-bl-none backdrop-blur-sm">
//                 <div className="flex gap-2">
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-100"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-200"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }



// 

// "use client";

// import { useLanguage } from "@/lib/language-context";
// import { useEffect, useState } from "react";
// import { Clipboard, ClipboardCheck } from "lucide-react";

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage();
//   const [copiedId, setCopiedId] = useState<string | null>(null);

//   // STREAMING TEXT STATE
//   const [displayText, setDisplayText] = useState<Record<string, string>>({});

//   // ---------------- STREAMING EFFECT ----------------
//   useEffect(() => {
//     const latest = messages[messages.length - 1];
//     if (!latest || latest.sender !== "ai") return;

//     let index = 0;
//     const fullText = latest.text;

//     const interval = setInterval(() => {
//       index++;
//       setDisplayText((prev) => ({
//         ...prev,
//         [latest.id]: fullText.slice(0, index),
//       }));
//       if (index >= fullText.length) clearInterval(interval);
//     }, 18);

//     return () => clearInterval(interval);
//   }, [messages]);

//   // ---------------- FORMAT MESSAGE TEXT ----------------
//   const formatText = (text: string) => {
//     if (!text) return "";

//     return text
//       // convert proper bold text only
//       .replace(/\*\*(?!\s)(.*?)\*\*/g, "<strong>$1</strong>")
//       // convert markdown bullet to actual bullet (fix emoji issue)
//       .replace(/^\* /gm, "• ")
//       // spacing fix (optional but improves look)
//       .replace(/(\S)(🔥|☕|💧|🧪|🫘|⏳|⏰|📌|🌡️|🕒|📝|⚖️)/g, "$1 $2")
//       .replace(/\n\n/g, "<br/><br/>")
//       .replace(/\n/g, "<br/>")
//       .trim();
//   };

//   // ---------------- COPY CLEAN TEXT ----------------
//   const copyMessage = (rawText: string, id: string) => {
//     navigator.clipboard.writeText(rawText.replace(/\*\*/g, "").trim());
//     setCopiedId(id);

//     setTimeout(() => setCopiedId(null), 1800);
//   };

//   // ---------------- HERO TEXT ----------------
//   const heroMessages = {
//     en: "Welcome to your premium coffee experience. I'm Barist.Ai, your expert guide to everything coffee. Ask about brewing methods, beans, flavor, espresso, or coffee science.",
//     pt: "Bem-vindo à sua experiência premium de café. Sou o Barist.Ai, seu guia especialista. Pergunte sobre preparo, grãos, sabor, espresso ou ciência do café."
//   };

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-gradient-to-b from-background via-background to-secondary/20">

//       {/* ---------------- EMPTY STATE / HERO ---------------- */}
//       {messages.length === 0 ? (
//         <div className="h-full flex flex-col items-center justify-center text-center">
//           <div className="mb-8 animate-slide-up">
//             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center mb-6 shadow-premium animate-pulse-glow">
//               <img src="/logo.png" alt="Barist.Ai" className="w-12 h-12 object-contain animate-rotate-slow" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
//               {welcomeTitles[language]}
//             </h2>
//             <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto font-light">
//               {heroMessages[language]}
//             </p>
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* ---------------- MESSAGE BUBBLES ---------------- */}
//           {messages.map((msg, idx) => {
//             const visibleText =
//               msg.sender === "ai" ? displayText[msg.id] || "" : msg.text;

//             return (
//               <div
//                 key={msg.id}
//                 className={`relative flex animate-fade-in ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//                 style={{ animationDelay: `${idx * 50}ms` }}
//               >
//                 <div
//                   className={`relative max-w-xs lg:max-w-2xl px-5 py-4 rounded-2xl text-[19px] leading-relaxed whitespace-pre-wrap 
//                     ${
//                       msg.sender === "user"
//                         ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-premium"
//                         : "bg-card border border-border/40 text-foreground rounded-bl-none backdrop-blur-sm"
//                     }`}
//                   dangerouslySetInnerHTML={{ __html: formatText(visibleText) }}
//                 />

//                 {/* ---------------- COPY BUTTON (same style as old) ---------------- */}
//                 {msg.sender !== "user" && (
//                   <button
//                     onClick={() => copyMessage(msg.text, msg.id)}
//                     className={`absolute -bottom-4 left-2 p-1.5 bg-white/80 backdrop-blur-lg rounded-full shadow-sm 
//                     border border-gray-200 hover:scale-110 active:scale-95 transition-all`}
//                     style={{ transform: "translateY(50%)" }}
//                   >
//                     {copiedId === msg.id ? (
//                       <ClipboardCheck size={17} className="text-green-600" />
//                     ) : (
//                       <Clipboard size={17} className="text-gray-600" />
//                     )}
//                   </button>
//                 )}
//               </div>
//             );
//           })}

//           {/* ---------------- TYPING INDICATOR ---------------- */}
//           {isLoading && (
//             <div className="flex justify-start animate-slide-up">
//               <div className="bg-card border border-border/40 px-5 py-4 rounded-2xl rounded-bl-none backdrop-blur-sm">
//                 <div className="flex gap-2">
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-100"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-200"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useLanguage } from "@/lib/language-context";
// import { useEffect, useState } from "react";
// import { Clipboard, ClipboardCheck } from "lucide-react";

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage();
//   const [copiedId, setCopiedId] = useState<string | null>(null);

//   // Streaming result text
//   const [displayText, setDisplayText] = useState<Record<string, string>>({});

//   // ---------------- STREAMING EFFECT ----------------
//   useEffect(() => {
//     const latest = messages[messages.length - 1];
//     if (!latest || latest.sender !== "ai") return;

//     let index = 0;
//     const fullText = latest.text;

//     const interval = setInterval(() => {
//       index++;
//       setDisplayText((prev) => ({
//         ...prev,
//         [latest.id]: fullText.slice(0, index),
//       }));
//       if (index >= fullText.length) clearInterval(interval);
//     }, 18);

//     return () => clearInterval(interval);
//   }, [messages]);

//   // ---------------- TEXT FORMATTER ----------------
//   const formatText = (text: string) => {
//     if (!text) return "";
//     return text
//       .replace(/\*\*(?!\s)(.*?)\*\*/g, "<strong>$1</strong>")
//       .replace(/^\* /gm, "• ")
//       .replace(/(\S)(🔥|☕|💧|🧪|🫘|⏳|📌|🍩|🌡️|🕒|⚖️)/g, "$1 $2")
//       .replace(/\n\n/g, "<br/><br/>")
//       .replace(/\n/g, "<br/>")
//       .trim();
//   };

//   // ---------------- COPY LOGIC ----------------
//   const copyMessage = (rawText: string, id: string) => {
//     navigator.clipboard.writeText(rawText.replace(/\*\*/g, "").trim());
//     setCopiedId(id);

//     setTimeout(() => setCopiedId(null), 1800);
//   };

//   // ---------------- HERO TEXT ----------------
//   const heroMessages = {
//     en: "Welcome to your premium coffee experience. I'm Barist.Ai — ask about brewing, espresso, beans, taste, origins, or coffee science.",
//     pt: "Bem-vindo à sua experiência premium de café. Sou o Barist.Ai — pergunte sobre preparo, espresso, grãos, sabor, origens ou ciência do café.",
//   };

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-gradient-to-b from-background via-background to-secondary/20">

//       {/* EMPTY STATE / WELCOME SCREEN */}
//       {messages.length === 0 ? (
//         <div className="h-full flex flex-col items-center justify-center text-center">
//           <div className="mb-8 animate-slide-up">
//             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center mb-6 shadow-premium animate-pulse-glow">
//               <img src="/logo.png" alt="Barist.Ai" className="w-12 h-12 object-contain animate-rotate-slow" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
//               {welcomeTitles[language]}
//             </h2>
//             <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto font-light">
//               {heroMessages[language]}
//             </p>
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* ---------------- CHAT BUBBLES ---------------- */}
//           {messages.map((msg, idx) => {
//             const visibleText = msg.sender === "ai" ? displayText[msg.id] || "" : msg.text;

//             return (
//               <div
//                 key={msg.id}
//                 className={`relative flex animate-fade-in ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//                 style={{ animationDelay: `${idx * 50}ms` }}
//               >
//                 {/* MESSAGE BUBBLE */}
//                 <div
//                   className={`relative max-w-xs lg:max-w-2xl px-5 py-4 rounded-2xl text-[19px] leading-relaxed whitespace-pre-wrap
//                     ${
//                       msg.sender === "user"
//                         ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-premium"
//                         : "bg-card border border-border/40 text-foreground rounded-bl-none backdrop-blur-sm"
//                     }`}
//                   dangerouslySetInnerHTML={{ __html: formatText(visibleText) }}
//                 />

//                 {/* COPY BUTTON FOR BOTH USER + AI */}
//                 <button
//                   onClick={() => copyMessage(msg.text, msg.id)}
//                   className={`absolute -bottom-4 p-1.5 bg-white/80 backdrop-blur-lg rounded-full shadow-sm border border-gray-200 
//                   hover:scale-110 active:scale-95 transition-all
//                   ${msg.sender === "user" ? "right-2" : "left-2"}`}
//                   style={{ transform: "translateY(50%)" }}
//                 >
//                   {copiedId === msg.id ? (
//                     <ClipboardCheck size={17} className="text-green-600" />
//                   ) : (
//                     <Clipboard size={17} className="text-gray-600" />
//                   )}
//                 </button>
//               </div>
//             );
//           })}

//           {/* ---------------- TYPING INDICATOR ---------------- */}
//           {isLoading && (
//             <div className="flex justify-start animate-slide-up">
//               <div className="bg-card border border-border/40 px-5 py-4 rounded-2xl rounded-bl-none backdrop-blur-sm">
//                 <div className="flex gap-2">
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-100"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-200"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useLanguage } from "@/lib/language-context";
// import { useEffect, useState } from "react";
// import { Clipboard, ClipboardCheck } from "lucide-react";

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage();
//   const [copiedId, setCopiedId] = useState<string | null>(null);

//   // STREAM STATE
//   const [displayText, setDisplayText] = useState<Record<string, string>>({});

//   // ---------------- STREAMING EFFECT ----------------
//   useEffect(() => {
//     const latest = messages[messages.length - 1];
//     if (!latest || latest.sender !== "ai") return;

//     let index = 0;
//     const fullText = latest.text;

//     const interval = setInterval(() => {
//       index++;
//       setDisplayText((prev) => ({
//         ...prev,
//         [latest.id]: fullText.slice(0, index),
//       }));

//       if (index >= fullText.length) clearInterval(interval);
//     }, 18);

//     return () => clearInterval(interval);
//   }, [messages]);

//   // ---------------- FORMATTER FOR DISPLAY ----------------
//   const formatText = (text: string) => {
//     if (!text) return "";

//     return text
//       .replace(/\*\*(?!\s)(.*?)\*\*/g, "<strong>$1</strong>") // bold fix
//       .replace(/^\* /gm, "• ") // bullet fix (keeps emojis visible)
//       .replace(/(\S)(🔥|☕|💧|🧪|🫘|⏳|📌|🍩|🌡️|🕒|⚖️)/g, "$1 $2") // spacing fix
//       .replace(/\n\n/g, "<br/><br/>")
//       .replace(/\n/g, "<br/>")
//       .trim();
//   };

//   // ---------------- CLEAN COPY TEXT ----------------
//   const copyMessage = (rawText: string, id: string) => {
//     let clean = rawText;

//     // Convert HTML breaks → normal line breaks
//     clean = clean.replace(/<br\s*\/?>/gi, "\n");

//     // Convert bold → plain text (no ** or HTML)
//     clean = clean.replace(/<\/?strong>/gi, "");

//     // Strip any remaining HTML safely
//     clean = clean.replace(/<\/?[^>]+(>|$)/g, "");

//     clean = clean.trim();

//     navigator.clipboard.writeText(clean);
//     setCopiedId(id);

//     setTimeout(() => setCopiedId(null), 1800);
//   };

//   // ---------------- WELCOME SCREEN ----------------
//   const heroMessages = {
//     en: "Welcome to your premium coffee experience. I'm Barist.Ai — ask about brewing, espresso, beans, flavor, origins or coffee science.",
//     pt: "Bem-vindo à sua experiência premium de café. Sou o Barist.Ai — pergunte sobre preparo, espresso, grãos, sabor, origens ou ciência do café.",
//   };

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-gradient-to-b from-background via-background to-secondary/20">

//       {messages.length === 0 ? (
//         // ---------------- FIRST SCREEN ----------------
//         <div className="h-full flex flex-col items-center justify-center text-center">
//           <div className="mb-8 animate-slide-up">
//             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center mb-6 shadow-premium animate-pulse-glow">
//               <img src="/logo.png" alt="Barist.Ai" className="w-12 h-12 object-contain animate-rotate-slow" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
//               {welcomeTitles[language]}
//             </h2>
//             <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto font-light">
//               {heroMessages[language]}
//             </p>
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* ---------------- CHAT BUBBLES ---------------- */}
//           {messages.map((msg, idx) => {
//             const visibleText = msg.sender === "ai" ? displayText[msg.id] || "" : msg.text;

//             return (
//               <div
//                 key={msg.id}
//                 className={`relative flex animate-fade-in ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//                 style={{ animationDelay: `${idx * 50}ms` }}
//               >
//                 {/* MESSAGE UI */}
//                 <div
//                   className={`relative max-w-xs lg:max-w-2xl px-5 py-4 rounded-2xl text-[19px] leading-relaxed whitespace-pre-wrap 
//                   ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-premium"
//                       : "bg-card border border-border/40 text-foreground rounded-bl-none backdrop-blur-sm"
//                   }`}
//                   dangerouslySetInnerHTML={{ __html: formatText(visibleText) }}
//                 />

//                 {/* ---------------- COPY BUTTON (BOTH SIDES) ---------------- */}
//                 <button
//                   onClick={() => copyMessage(msg.text, msg.id)}
//                   className={`absolute -bottom-4 p-1.5 bg-white/80 backdrop-blur-lg rounded-full shadow-sm border border-gray-200 
//                   hover:scale-110 active:scale-95 transition-all
//                   ${msg.sender === "user" ? "right-2" : "left-2"}`}
//                   style={{ transform: "translateY(50%)" }}
//                 >
//                   {copiedId === msg.id ? (
//                     <ClipboardCheck size={17} className="text-green-600" />
//                   ) : (
//                     <Clipboard size={17} className="text-gray-600" />
//                   )}
//                 </button>
//               </div>
//             );
//           })}

//           {/* ---------------- TYPING DOTS ---------------- */}
//           {isLoading && (
//             <div className="flex justify-start animate-slide-up">
//               <div className="bg-card border border-border/40 px-5 py-4 rounded-2xl rounded-bl-none backdrop-blur-sm">
//                 <div className="flex gap-2">
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-100"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-200"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useLanguage } from "@/lib/language-context";
// import { useEffect, useState } from "react";
// import { Clipboard, ClipboardCheck } from "lucide-react";

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage();
//   const [copiedId, setCopiedId] = useState<string | null>(null);

//   const [displayText, setDisplayText] = useState<Record<string, string>>({});

//   // STREAM / TYPING EFFECT
//   useEffect(() => {
//     const latest = messages[messages.length - 1];
//     if (!latest || latest.sender !== "ai") return;

//     let i = 0;
//     const fullText = latest.text;

//     const interval = setInterval(() => {
//       i++;
//       setDisplayText((prev) => ({
//         ...prev,
//         [latest.id]: fullText.slice(0, i),
//       }));

//       if (i >= fullText.length) clearInterval(interval);
//     }, 18);

//     return () => clearInterval(interval);
//   }, [messages]);


//   // FORMATTER
//   const formatText = (text: string) => {
//     if (!text) return "";

//     return text

//       // Bold formatting
//       .replace(/\*\*(?!\s)(.*?)\*\*/g, "<strong>$1</strong>")

//       // Fix numbering spacing ("1." → "1. ")
//       .replace(/(\d+)\.(?!\s)/g, "$1. ")

//       // Prevent accidental nested outline formatting from AI
//       .replace(/^\s*\d\.\s*\d\./gm, "•")

//       // Bullet style fix
//       .replace(/^\* /gm, "• ")

//       // Emoji spacing rule
//       .replace(/(\S)(🔥|☕|💧|🧪|🫘|⏳|📌|🍩|🌡️|🕒|⚖️|😋|✨|👌)/g, "$1 $2")

//       // Line breaks
//       .replace(/\n\n/g, "<br/><br/>")
//       .replace(/\n/g, "<br/>")
//       .trim();
//   };


//   // COPY TEXT CLEAN
//   const copyMessage = (rawText: string, id: string) => {
//     let clean = rawText
//       .replace(/<br\s*\/?>/gi, "\n")
//       .replace(/<\/?strong>/gi, "")
//       .replace(/<\/?[^>]+(>|$)/g, "")
//       .trim();

//     navigator.clipboard.writeText(clean);
//     setCopiedId(id);

//     setTimeout(() => setCopiedId(null), 1800);
//   };


//   // UI Strings
//   const heroMessages = {
//     en: "Welcome to your premium coffee experience. Ask anything about brewing, espresso, beans, flavor, origins or coffee science.",
//     pt: "Bem-vindo à sua experiência premium de café. Pergunte sobre preparo, espresso, grãos, sabor, origens ou ciência do café.",
//   };

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   };


//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-gradient-to-b from-background via-background to-secondary/20">

//       {messages.length === 0 ? (
//         // FIRST LOAD UI
//         <div className="h-full flex flex-col items-center justify-center text-center">
//           <div className="mb-8 animate-slide-up">
//             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center mb-6 shadow-premium animate-pulse-glow">
//               <img src="/logo.png" alt="Barist.Ai" className="w-12 h-12 object-contain animate-rotate-slow" />
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
//               {welcomeTitles[language]}
//             </h2>
//             <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto font-light">
//               {heroMessages[language]}
//             </p>
//           </div>
//         </div>
//       ) : (
//         <>

//           {messages.map((msg, idx) => {
//             const visibleText = msg.sender === "ai" ? displayText[msg.id] || "" : msg.text;

//             return (
//               <div
//                 key={msg.id}
//                 className={`relative flex animate-fade-in ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//                 style={{ animationDelay: `${idx * 50}ms` }}
//               >
//                 <div
//                   className={`relative max-w-xs lg:max-w-2xl px-5 py-4 rounded-2xl text-[19px] leading-relaxed whitespace-pre-wrap 
//                   ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-premium"
//                       : "bg-card border border-border/40 text-foreground rounded-bl-none backdrop-blur-sm"
//                   }`}
//                   dangerouslySetInnerHTML={{ __html: formatText(visibleText) }}
//                 />

//                 {/* COPY BUTTON FOR BOTH */}
//                 <button
//                   onClick={() => copyMessage(msg.text, msg.id)}
//                   className={`absolute -bottom-4 p-1.5 bg-white/80 backdrop-blur-lg rounded-full shadow-sm border border-gray-200 
//                   hover:scale-110 active:scale-95 transition-all ${msg.sender === "user" ? "right-2" : "left-2"}`}
//                   style={{ transform: "translateY(50%)" }}
//                 >
//                   {copiedId === msg.id ? (
//                     <ClipboardCheck size={17} className="text-green-600" />
//                   ) : (
//                     <Clipboard size={17} className="text-gray-600" />
//                   )}
//                 </button>
//               </div>
//             );
//           })}


//           {isLoading && (
//             <div className="flex justify-start animate-slide-up">
//               <div className="bg-card border border-border/40 px-5 py-4 rounded-2xl rounded-bl-none backdrop-blur-sm">
//                 <div className="flex gap-2">
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-100"></div>
//                   <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-200"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useLanguage } from "@/lib/language-context";
// import { useEffect, useState } from "react";
// import { Clipboard, ClipboardCheck } from "lucide-react";

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage();
//   const [copiedId, setCopiedId] = useState<string | null>(null);
//   const [displayText, setDisplayText] = useState<Record<string, string>>({});

//  // STREAM / TYPING EFFECT
// useEffect(() => {
//   const latest = messages[messages.length - 1];

//   // Run streaming ONLY for AI responses
//   if (!latest || latest.sender !== "ai") return;

//   const fullText = String(latest.text); // <-- FIX prevents non-string crash
//   let i = 0;

//   const interval = setInterval(() => {
//     i++;
//     setDisplayText(prev => ({
//       ...prev,
//       [latest.id]: fullText.slice(0, i)
//     }));

//     if (i >= fullText.length) clearInterval(interval);
//   }, 20);

//   return () => clearInterval(interval);
// }, [messages]);


//   // Format output

// const formatText = (text: string) => {
//   if (!text) return "";

//   return text
//     // correct bold handling
//     .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

//     // numbered list formatting
//     .replace(/(\d+)\.(?!\s)/g, "$1. ")

//     // bullet fix
//     .replace(/^\* /gm, "• ")

//     // double line breaks
//     .replace(/\n\n/g, "<br/><br/>")
//     .replace(/\n/g, "<br/>")
//     .trim();
// };


//   // Copy raw text
//   const copyMessage = (raw: string, id: string) => {
//     navigator.clipboard.writeText(raw.replace(/<[^>]+>/g, ""));
//     setCopiedId(id);
//     setTimeout(() => setCopiedId(null), 1800);
//   };

//   const heroMessages = {
//     en: "Welcome to your premium coffee experience.",
//     pt: "Bem-vindo à sua experiência premium de café.",
//   };

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">

//       {messages.length === 0 ? (
//         <div className="h-full flex flex-col items-center justify-center text-center opacity-90">
//           <h2 className="text-4xl font-serif font-bold mb-2">{welcomeTitles[language]}</h2>
//           <p className="text-lg max-w-2xl">{heroMessages[language]}</p>
//         </div>
//       ) : (
//         messages.map((msg, i) => {
//           const rendered = msg.sender === "ai" ? displayText[msg.id] || "" : msg.text;

//           return (
//             <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
//               <div
//                 className={`max-w-lg px-5 py-3 rounded-xl text-[18px] leading-relaxed ${
//                   msg.sender === "user"
//                     ? "bg-gradient-to-r from-primary to-primary/80 text-white"
//                     : "bg-white border"
//                 }`}
//                 dangerouslySetInnerHTML={{ __html: formatText(rendered) }}
//               />

//               {/* Copy Button */}
//               <button
//                 onClick={() => copyMessage(msg.text, msg.id)}
//                 className={`ml-2 p-2 rounded-full bg-white`}
//               >
//                 {copiedId === msg.id ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
//               </button>
               

//             </div>
//           );
//         })
//       )}

//       {isLoading && (
//         <div className="flex gap-2">
//           <div className="animate-bounce w-2 h-2 bg-primary rounded-full" />
//           <div className="animate-bounce w-2 h-2 bg-primary rounded-full delay-100" />
//           <div className="animate-bounce w-2 h-2 bg-primary rounded-full delay-200" />
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useLanguage } from "@/lib/language-context";
// import { useEffect, useState } from "react";
// import { Clipboard, ClipboardCheck } from "lucide-react";

// export default function ChatArea({ messages, isLoading }) {
//   const { language } = useLanguage();
//   const [copiedId, setCopiedId] = useState<string | null>(null);
//   const [displayText, setDisplayText] = useState<Record<string, string>>({});

//   // STREAM / TYPING EFFECT
//   useEffect(() => {
//     const latest = messages[messages.length - 1];

//     if (!latest || latest.sender !== "ai") return;

//     const fullText = String(latest.text);
//     let i = 0;

//     const interval = setInterval(() => {
//       i++;
//       setDisplayText((prev) => ({
//         ...prev,
//         [latest.id]: fullText.slice(0, i),
//       }));

//       if (i >= fullText.length) clearInterval(interval);
//     }, 20);

//     return () => clearInterval(interval);
//   }, [messages]);

//   // FORMATTER
//   const formatText = (text: string) => {
//     if (!text) return "";

//     return text
//       .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
//       .replace(/(\d+)\.(?!\s)/g, "$1. ")
//       .replace(/^\* /gm, "• ")
//       .replace(/\n\n/g, "<br/><br/>")
//       .replace(/\n/g, "<br/>")
//       .trim();
//   };

//   // COPY FUNCTION
//   const copyMessage = (raw: string, id: string) => {
//     navigator.clipboard.writeText(raw.replace(/<[^>]+>/g, ""));
//     setCopiedId(id);
//     setTimeout(() => setCopiedId(null), 1500);
//   };

//   const heroMessages = {
//     en: "Welcome to your premium coffee experience.",
//     pt: "Bem-vindo à sua experiência premium de café.",
//   };

//   const welcomeTitles = {
//     en: "Welcome to Barist.Ai",
//     pt: "Bem-vindo ao Barist.Ai",
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">

//       {messages.length === 0 ? (
//         <div className="h-full flex flex-col items-center justify-center text-center opacity-90">
//           <h2 className="text-4xl font-serif font-bold mb-3">
//             {welcomeTitles[language]}
//           </h2>
//           <p className="text-lg max-w-xl">{heroMessages[language]}</p>
//         </div>
//       ) : (
//         messages.map((msg) => {
//           const rendered = msg.sender === "ai" ? displayText[msg.id] || "" : msg.text;

//           return (
//             <div
//               key={msg.id}
//               className={`relative flex ${
//                 msg.sender === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               {/* MESSAGE BUBBLE */}
//               <div
//                 className={`relative max-w-lg px-5 py-4 rounded-2xl text-[18px] leading-relaxed whitespace-pre-wrap shadow-md
//                 ${
//                   msg.sender === "user"
//                     ? "bg-gradient-to-r from-primary to-primary/80 text-white rounded-br-none"
//                     : "bg-white border rounded-bl-none"
//                 }`}
//                 dangerouslySetInnerHTML={{ __html: formatText(rendered) }}
//               />

//               {/* COPY BUTTON — PERFECT FLOATING POSITION */}
//               <button
//                 onClick={() => copyMessage(msg.text, msg.id)}
//                 className={`absolute p-2 rounded-full bg-white shadow-sm border hover:scale-110 active:scale-95 transition-all
//                 ${msg.sender === "user" ? "right-[-40px]" : "left-[-40px]"} 
//                 bottom-2`}
//               >
//                 {copiedId === msg.id ? (
//                   <ClipboardCheck size={18} className="text-green-600" />
//                 ) : (
//                   <Clipboard size={18} className="text-gray-700" />
//                 )}
//               </button>
//             </div>
//           );
//         })
//       )}

//       {/* AI LOADING INDICATOR */}
//       {isLoading && (
//         <div className="flex items-start gap-2">
//           <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
//           <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-100"></div>
//           <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce delay-200"></div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useLanguage } from "@/lib/language-context";
import { useEffect, useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";

export default function ChatArea({ messages, isLoading }) {
  const { language } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState<Record<string, string>>({});

  // STREAMING EFFECT
  useEffect(() => {
    const latest = messages[messages.length - 1];
    if (!latest || latest.sender !== "ai") return;

    const fullText = String(latest.text);
    let i = 0;

    const interval = setInterval(() => {
      i++;
      setDisplayText((prev) => ({
        ...prev,
        [latest.id]: fullText.slice(0, i),
      }));

      if (i >= fullText.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [messages]);

  const formatText = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/(\d+)\.(?!\s)/g, "$1. ")
      .replace(/^\* /gm, "• ")
      .replace(/\n\n/g, "<br/><br/>")
      .replace(/\n/g, "<br/>")
      .trim();

  const copyMessage = (raw: string, id: string) => {
    navigator.clipboard.writeText(raw.replace(/<[^>]+>/g, ""));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8 space-y-6">

      {messages.length === 0 ? (
        <div className="flex flex-col items-center opacity-90 text-center">
          <h2 className="text-4xl font-serif font-bold mb-3">
            {language === "pt" ? "Bem-vindo ao Barist.Ai" : "Welcome to Barist.Ai"}
          </h2>
          <p className="text-lg max-w-xl">
            {language === "pt"
              ? "Pergunte qualquer coisa sobre café, preparo ou grãos."
              : "Ask anything about coffee, brewing or beans."}
          </p>
        </div>
  ) : (
    <>
      {messages.map((msg) => {
  const rendered = msg.sender === "ai" ? displayText[msg.id] || "" : msg.text;

  return (
    <div 
      key={msg.id} 
      className={`flex relative mb-10 ${msg.sender === "user" ? "justify-end" : "justify-start"}`} // ⬅️ Added mb-10
    >

      <div
        className={`relative max-w-lg px-5 py-4 rounded-2xl text-[18px] leading-relaxed whitespace-pre-wrap shadow-md
        ${msg.sender === "user"
          ? "bg-gradient-to-r from-primary to-primary/80 text-white rounded-br-none"
          : "bg-white border rounded-bl-none"}`}
        dangerouslySetInnerHTML={{ __html: formatText(rendered) }}
      />

      {/* NEW improved copy button */}
      <button
        onClick={() => copyMessage(msg.text, msg.id)}
        className={`absolute -bottom-8 z-20 p-2.5 bg-white/90 backdrop-blur-xl rounded-full shadow-md border border-gray-300 
        hover:scale-110 active:scale-95 transition-all duration-200
        ${msg.sender === "user" ? "right-3" : "left-3"}`}
        style={{ transform: "translateY(50%)" }}
      >
        {copiedId === msg.id ? (
          <ClipboardCheck size={22} className="text-green-600" /> // bigger icon
        ) : (
          <Clipboard size={22} className="text-gray-600" />
        )}
      </button>

    </div>
  );
})}

  </>
)}

{isLoading && (
        <div className="flex gap-2">
          <div className="animate-bounce w-3 h-3 bg-primary rounded-full" />
          <div className="animate-bounce w-3 h-3 bg-primary rounded-full delay-100" />
          <div className="animate-bounce w-3 h-3 bg-primary rounded-full delay-200" />
        </div>
      )}
    </div>
  );
}




