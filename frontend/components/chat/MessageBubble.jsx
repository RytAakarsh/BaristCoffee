// "use client";

// export default function MessageBubble({ text, isUser }) {
//   // Remove ALL markdown formatting
//   const cleaned = text
//     .replace(/\*\*/g, "") // remove bold markers
//     .replace(/\*/g, "") // remove bullets or italic markers
//     .replace(/_/g, "") // remove underscores used for emphasis
//     .replace(/#/g, "") // remove heading marks
//     .replace(/>\s?/g, "") // remove quote marks
//     .replace(/`/g, "") // remove inline code marks
//     .trim();

//   return (
//     <div
//       className={`rounded-xl p-3 my-2 ${
//         isUser
//           ? "bg-[#965a3e] text-white self-end"
//           : "bg-white text-black"
//       }`}
//       style={{ maxWidth: "75%" }}
//     >
//       {cleaned}
//     </div>
//   );
// }


// "use client";

// import React from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// export default function MessageBubble({ text, isUser }) {
//   return (
//     <div
//       className={`rounded-xl p-4 my-2 ${
//         isUser
//           ? "bg-[#965a3e] text-white self-end"
//           : "bg-white text-black"
//       }`}
//       style={{ maxWidth: "75%" }}
//     >
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         components={{
//           h1: ({ children }) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
//           h2: ({ children }) => <h2 className="text-lg font-semibold mb-2">{children}</h2>,
//           h3: ({ children }) => <h3 className="text-base font-semibold mb-1">{children}</h3>,
//           p: ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
//           ul: ({ children }) => <ul className="list-disc ml-5 mb-2">{children}</ul>,
//           ol: ({ children }) => <ol className="list-decimal ml-5 mb-2">{children}</ol>,
//           li: ({ children }) => <li className="mb-1">{children}</li>,
//         }}
//       >
//         {text}
//       </ReactMarkdown>
//     </div>
//   );
// }


// "use client";

// export default function MessageBubble({ text, isUser }) {
//   // Remove markdown formatting but KEEP structure
//   const cleaned = text
//     .replace(/^\s*#+\s?/gm, "")     // remove headings (#, ##, ###)
//     .replace(/\*\*/g, "")          // remove bold markers **
//     .replace(/^\s*\*\s?/gm, "")    // remove bullet stars *
//     .replace(/_/g, "")             // remove italics __ _
//     .replace(/`/g, "")             // remove inline code `
//     .replace(/>\s?/g, "")          // remove blockquote >
//     .trim();

//   return (
//     <div
//       className={`rounded-xl p-3 my-2 ${
//         isUser
//           ? "bg-[#965a3e] text-white self-end"
//           : "bg-white text-black"
//       }`}
//       style={{ 
//         maxWidth: "75%", 
//         whiteSpace: "pre-wrap"   // VERY IMPORTANT → keeps line breaks + structure
//       }}
//     >
//       {cleaned}
//     </div>
//   );
// }


// "use client";

// export default function MessageBubble({ text, isUser }) {

//   const cleaned = text
//     .replace(/\*/g, "")
//     .replace(/#/g, "")
//     .replace(/_/g, "")
//     .replace(/`/g, "")
//     .replace(/>/g, "")
//     .trim();

//   return (
//     <div
//       className={`rounded-xl p-3 my-2 ${
//         isUser ? "bg-[#965a3e] text-white self-end" : "bg-white text-black"
//       }`}
//       style={{ maxWidth: "75%", whiteSpace: "pre-wrap", lineHeight: "1.5" }}
//     >
//       {cleaned}
//     </div>
//   );
// }


// "use client";

// export default function MessageBubble({ text, isUser }) {
  
//   // --- Convert basic markdown into readable HTML ---
//   const formattedText = text
//     .replace(/#+\s?/g, "") // remove markdown headings
//     .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold text
//     .replace(/^\s*-\s/gm, "• ") // convert bullet marks
//     .replace(/^\s*\*\s/gm, "• ") // convert "*" bullets
//     .replace(/`/g, "") // remove inline code
//     .trim();

//   return (
//     <div
//       className={`p-4 my-2 rounded-xl leading-relaxed ${
//         isUser
//           ? "bg-[#965a3e] text-white self-end"
//           : "bg-white text-[#1a1a1a] shadow-sm"
//       }`}
//       style={{
//         maxWidth: "75%",
//         whiteSpace: "pre-wrap",
//         fontSize: "1.05rem", // <-- font size increased
//         lineHeight: "1.6"
//       }}
//       dangerouslySetInnerHTML={{ __html: formattedText }}
//     />
//   );
// }


// "use client";

// export default function MessageBubble({ text, isUser }) {
//   const formatted = text
//     .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
//     .replace(/^\s*#+\s?/gm, "")
//     .replace(/_/g, "")
//     .replace(/`/g, "")
//     .replace(/>\s?/g, "")
//     .trim();

//   return (
//     <div
//       className={`rounded-xl p-4 my-2 leading-relaxed text-[18px] ${
//         isUser
//           ? "bg-[#965a3e] text-white self-end"
//           : "bg-white text-[#2b2b2b]"
//       }`}
//       style={{ maxWidth: "80%", whiteSpace: "pre-wrap" }}
//       dangerouslySetInnerHTML={{ __html: formatted }}
//     />
//   );
// }


// "use client";

// export default function MessageBubble({ text, isUser }) {
  
//   // Ensure text is always a string
//   let safeText = typeof text === "string" ? text : JSON.stringify(text ?? "");

//   // ---- FORMATTER ----
//   const formatted = safeText
//     .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")   // bold
//     .replace(/\n\n/g, "<br/><br/>")                   // paragraph spacing
//     .replace(/\n/g, "<br/>")                          // line breaks
//     .trim();

//   return (
//     <div
//       className={`rounded-xl p-4 my-2 text-[17px] leading-relaxed ${
//         isUser
//           ? "bg-[#965a3e] text-white text-right"
//           : "bg-white text-black border border-gray-300"
//       }`}
//       style={{ maxWidth: "75%", whiteSpace: "pre-wrap" }}
//       dangerouslySetInnerHTML={{ __html: formatted }}
//     />
//   );
// }

// "use client";
// import DOMPurify from "dompurify";

// export default function MessageBubble({ text, isUser }) {

//   if (!text) return null;

//   // Formatting rules
//   let formatted = text
//     .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold
//     .replace(/(?:\r\n|\r|\n)/g, "<br/>")              // new line
//     .replace(/(\d+\. )/g, "<br/><strong>$1</strong>") // numbered steps highlight
//     .replace(/•/g, "• ")                               // spacing
//     .trim();

//   formatted = DOMPurify.sanitize(formatted);

//   return (
//     <div
//       className={`max-w-[80%] p-4 rounded-2xl text-[17px] leading-relaxed ${
//         isUser
//           ? "bg-[#965A3E] text-white self-end rounded-br-none"
//           : "bg-white text-black border border-gray-200 rounded-bl-none"
//       }`}
//       style={{ whiteSpace: "pre-wrap" }}
//       dangerouslySetInnerHTML={{ __html: formatted }}
//     />
//   );
// }


"use client";
import DOMPurify from "dompurify";

export default function MessageBubble({ text, isUser }) {

  if (!text) return null;

  let formatted = text
    // Headings: Bold + spacing
    .replace(/\*\*(.*?)\*\*/g, `<strong style="font-size:18px; display:block; margin-bottom:6px;">$1</strong>`)
    
    // Normal bold inside sentences
    .replace(/\b(\w+):/g, `<strong>$1:</strong>`)
    
    // Line breaks
    .replace(/(?:\r\n|\r|\n)/g, "<br/><br/>")

    // Number formatting
    .replace(/(\d+\.) /g, `<br/><strong>$1</strong> `)
    
    .trim();

  formatted = DOMPurify.sanitize(formatted);

  return (
    <div
      className={`max-w-[80%] p-5 rounded-2xl text-[20px] leading-relaxed tracking-[0.3px] ${
        isUser
          ? "bg-[#965A3E] text-white self-end rounded-br-none"
          : "bg-white text-black border border-gray-200 rounded-bl-none"
      }`}
      style={{ whiteSpace: "pre-wrap" }}
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  );
}
