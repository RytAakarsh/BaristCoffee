"use client";

import { useState } from "react";
import ChatInput from "@/components/ChatInput";
import { sendChatMessage } from "@/lib/api";
import { useLanguage } from "@/lib/language-context";
import MessageBubble from "@/components/chat/MessageBubble";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  async function onSendMessage(userMessage) {
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    const res = await sendChatMessage(userMessage);
    const botReply = res.answer || "No response from server.";

    setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble
            key={i}
            text={msg.text}
            isUser={msg.role === "user"}
          />
        ))}
      </div>

      <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
    </div>
  );
}
