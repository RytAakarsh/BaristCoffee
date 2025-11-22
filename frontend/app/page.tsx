"use client";

import { useState, useRef, useEffect } from "react";
import ChatArea from "@/components/chat/chat-area";
import ChatInput from "@/components/chat/chat-input";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import FeedbackPanel from "@/components/feedback/feedback-panel";
import { useLanguage } from "@/lib/language-context";
import { useAuth } from "@/lib/auth-context";
import CoffeeElements from "@/components/decorative/coffee-elements";
import HeroSection from "@/components/decorative/hero-section";
import { sendChatMessage } from "@/lib/api";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface ChatHistory {
  id: string;
  query: string;
  timestamp: number;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const { language } = useLanguage();
  const { user } = useAuth();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newSessionId = `session-${Date.now()}`;
    setSessionId(newSessionId);

    if (user) {
      const saved = localStorage.getItem(`history-${user.id}`);
      if (saved) {
        try {
          setChatHistory(JSON.parse(saved));
        } catch (error) {
          console.error("[v0] Error loading history:", error);
        }
      }
    }
  }, [user]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      const botRes = await sendChatMessage(message);

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botRes.answer,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "Error contacting AI.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen bg-background relative overflow-hidden">
      <CoffeeElements />

      <Sidebar
        user={user}
        history={chatHistory}
        onLoadFromHistory={(query) => handleSendMessage(query)}
      />

      <div className="flex-1 flex flex-col relative z-10">
        <Header />

        <main className="flex-1 flex flex-col overflow-hidden">
          {messages.length === 0 ? (
            <HeroSection />
          ) : (
            <ChatArea messages={messages} isLoading={isLoading} />
          )}
          <div ref={chatEndRef} />
        </main>

        <div className="border-t border-border bg-card/95 backdrop-blur-sm">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          <button
            onClick={() => setShowFeedback(true)}
            className="w-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 hover:bg-primary/5"
          >
            {language === "en"
              ? "✨ End session & give feedback"
              : "✨ Finalizar sessão e dar feedback"}
          </button>
        </div>
      </div>

      {showFeedback && (
        <FeedbackPanel
          onClose={() => setShowFeedback(false)}
          sessionId={sessionId}
        />
      )}
    </div>
  );
}
