"use client";

export default function MessageBubble({ text, isUser }) {
  // Remove ALL markdown formatting
  const cleaned = text
    .replace(/\*\*/g, "") // remove bold markers
    .replace(/\*/g, "") // remove bullets or italic markers
    .replace(/_/g, "") // remove underscores used for emphasis
    .replace(/#/g, "") // remove heading marks
    .replace(/>\s?/g, "") // remove quote marks
    .replace(/`/g, "") // remove inline code marks
    .trim();

  return (
    <div
      className={`rounded-xl p-3 my-2 ${
        isUser
          ? "bg-[#965a3e] text-white self-end"
          : "bg-white text-black"
      }`}
      style={{ maxWidth: "75%" }}
    >
      {cleaned}
    </div>
  );
}
