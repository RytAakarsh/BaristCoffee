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

export default function Home() {
  const { user } = useAuth();
  const { language } = useLanguage();

  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSessionId(`session-${Date.now()}`);

    if (user) {
      const saved = localStorage.getItem(`history-${user.id}`);
      if (saved) setChatHistory(JSON.parse(saved));
    }
  }, [user]);

  const handleSendMessage = async (msg: string) => {
    if (!msg.trim()) return;

    const userMsg = { id: Date.now(), text: msg, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setIsLoading(true);
    try {
      const bot = await sendChatMessage(msg);
      const botMsg = { id: Date.now() + 1, text: bot.answer, sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
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

      {/* SIDEBAR */}
      <Sidebar
        user={user}
        history={chatHistory}
        onLoadFromHistory={(q) => handleSendMessage(q)}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />

      {/* OVERLAY TO CLOSE MENU */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col relative z-10">
        <Header isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

        <main className="flex-1 overflow-hidden flex flex-col">
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
            className="w-full px-4 py-3 text-sm text-muted-foreground hover:text-primary transition hover:bg-primary/5"
          >
            {language === "en"
              ? "✨ End session & give feedback"
              : "✨ Finalizar sessão e dar feedback"}
          </button>
        </div>
      </div>

      {showFeedback && (
        <FeedbackPanel onClose={() => setShowFeedback(false)} sessionId={sessionId} />
      )}
    </div>
  );
}
