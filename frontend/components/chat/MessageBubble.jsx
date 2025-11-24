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


"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MessageBubble({ text, isUser }) {
  return (
    <div
      className={`rounded-xl p-4 my-2 ${
        isUser
          ? "bg-[#965a3e] text-white self-end"
          : "bg-white text-black"
      }`}
      style={{ maxWidth: "75%" }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
          h2: ({ children }) => <h2 className="text-lg font-semibold mb-2">{children}</h2>,
          h3: ({ children }) => <h3 className="text-base font-semibold mb-1">{children}</h3>,
          p: ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="list-disc ml-5 mb-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal ml-5 mb-2">{children}</ol>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
