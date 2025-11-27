// 

// "use client";

// import { useState, useRef, useEffect } from "react";
// import ChatArea from "@/components/chat/chat-area";
// import ChatInput from "@/components/chat/chat-input";
// import Sidebar from "@/components/layout/sidebar";
// import Header from "@/components/layout/header";
// import FeedbackPanel from "@/components/feedback/feedback-panel";
// import { useLanguage } from "@/lib/language-context";
// import { useAuth } from "@/lib/auth-context";
// import CoffeeElements from "@/components/decorative/coffee-elements";
// import HeroSection from "@/components/decorative/hero-section";
// import { sendChatMessage } from "@/lib/api";

// export default function Home() {
//   const { user } = useAuth();
//   const { language } = useLanguage();

//   const [messages, setMessages] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState("");
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [chatHistory, setChatHistory] = useState<any[]>([]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const chatEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setSessionId(`session-${Date.now()}`);

//     if (user) {
//       const saved = localStorage.getItem(`history-${user.id}`);
//       if (saved) setChatHistory(JSON.parse(saved));
//     }
//   }, [user]);

//   // ------------------------- UPDATED MESSAGE HANDLER -------------------------
//   const handleSendMessage = async (msg: string) => {
//     if (!msg.trim()) return;

//     const userMsg = { id: Date.now(), text: msg, sender: "user" };
//     setMessages((prev) => [...prev, userMsg]);

//     setIsLoading(true);

//     try {
//       const res = await sendChatMessage(msg);

//       const reply =
//         res?.answer ||
//         res?.response ||
//         res?.reply ||
//         res ||
//         "⚠️ I couldn’t create a response.";

//       const botMsg = { id: Date.now() + 1, text: reply, sender: "bot" };
//       setMessages((prev) => [...prev, botMsg]);

//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, text: "⚠️ Server error — please try again.", sender: "bot" },
//       ]);
//     }

//     setIsLoading(false);
//   };
//   // ---------------------------------------------------------------------------

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex h-screen bg-background relative overflow-hidden">
//       <CoffeeElements />

//       {/* SIDEBAR */}
//       <Sidebar
//         user={user}
//         history={chatHistory}
//         onLoadFromHistory={(q) => handleSendMessage(q)}
//         isOpen={mobileMenuOpen}
//         setIsOpen={setMobileMenuOpen}
//       />

//       {/* MOBILE OVERLAY */}
//       {mobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-40 lg:hidden"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       <div className="flex-1 flex flex-col relative z-10">
//         <Header isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

//         <main className="flex-1 overflow-hidden flex flex-col">
//           {messages.length === 0 ? (
//             <HeroSection />
//           ) : (
//             <ChatArea messages={messages} isLoading={isLoading} />
//           )}

//           <div ref={chatEndRef} />
//         </main>

//         <div className="border-t border-border bg-card/95 backdrop-blur-sm">
//           <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
//           <button
//             onClick={() => setShowFeedback(true)}
//             className="w-full px-4 py-3 text-white bg-[#704020] opacity-100 font-bold text-sm hover:bg-amber-900"
//           >
//             {language === "en"
//               ? "✨ End session & give feedback"
//               : "✨ Finalizar sessão e dar feedback"}
//           </button>
//         </div>
//       </div>

//       {showFeedback && (
//         <FeedbackPanel onClose={() => setShowFeedback(false)} sessionId={sessionId} />
//       )}
//     </div>
//   );
// }


// "use client";

// import { useState, useRef, useEffect } from "react";
// import ChatArea from "@/components/chat/chat-area";
// import ChatInput from "@/components/chat/chat-input";
// import Sidebar from "@/components/layout/sidebar";
// import Header from "@/components/layout/header";
// import FeedbackPanel from "@/components/feedback/feedback-panel";
// import { useLanguage } from "@/lib/language-context";
// import { useAuth } from "@/lib/auth-context";
// import CoffeeElements from "@/components/decorative/coffee-elements";
// import HeroSection from "@/components/decorative/hero-section";
// import { sendChatMessage } from "@/lib/api";

// export default function Home() {
//   const { user } = useAuth();
//   const { language } = useLanguage();

//   const [messages, setMessages] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState("");
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [chatHistory, setChatHistory] = useState<any[]>([]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const chatEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // generate a unique session id for each new chat
//     setSessionId(`session-${Date.now()}`);

//     if (user) {
//       const saved = localStorage.getItem(`history-${user.id}`);
//       if (saved) setChatHistory(JSON.parse(saved));
//     }
//   }, [user]);

//   // ------------------------- UPDATED MESSAGE HANDLER -------------------------
//   const handleSendMessage = async (msg: string) => {
//     if (!msg.trim()) return;

//     // Add user message to UI
//     const userMsg = { id: Date.now(), text: msg, sender: "user" };
//     setMessages((prev) => [...prev, userMsg]);

//     setIsLoading(true);

//     try {
//       // IMPORTANT: send sessionId so backend can manage user name logic
//       const res = await sendChatMessage(msg, sessionId);

//       const reply =
//         res?.answer ||
//         res?.response ||
//         res?.reply ||
//         res ||
//         "⚠️ I couldn’t create a response.";

//       // Add bot message to UI
//       const botMsg = { id: Date.now() + 1, text: reply, sender: "bot" };
//       setMessages((prev) => [...prev, botMsg]);

//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, text: "⚠️ Server error — please try again.", sender: "bot" },
//       ]);
//     }

//     setIsLoading(false);
//   };
//   // ---------------------------------------------------------------------------

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex h-screen bg-background relative overflow-hidden">
//       <CoffeeElements />

//       {/* SIDEBAR */}
//       <Sidebar
//         user={user}
//         history={chatHistory}
//         onLoadFromHistory={(q) => handleSendMessage(q)}
//         isOpen={mobileMenuOpen}
//         setIsOpen={setMobileMenuOpen}
//       />

//       {/* MOBILE OVERLAY */}
//       {mobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-40 lg:hidden"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       <div className="flex-1 flex flex-col relative z-10">
//         <Header isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

//         <main className="flex-1 overflow-hidden flex flex-col">
//           {messages.length === 0 ? (
//             <HeroSection />
//           ) : (
//             <ChatArea messages={messages} isLoading={isLoading} />
//           )}

//           <div ref={chatEndRef} />
//         </main>

//         <div className="border-t border-border bg-card/95 backdrop-blur-sm">
//           <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
//           <button
//             onClick={() => setShowFeedback(true)}
//             className="w-full px-4 py-3 text-white bg-[#704020] opacity-100 font-bold text-sm hover:bg-amber-900"
//           >
//             {language === "en"
//               ? "✨ End session & give feedback"
//               : "✨ Finalizar sessão e dar feedback"}
//           </button>
//         </div>
//       </div>

//       {showFeedback && (
//         <FeedbackPanel onClose={() => setShowFeedback(false)} sessionId={sessionId} />
//       )}
//     </div>
//   );
// }


// "use client";

// import { useState, useRef, useEffect } from "react";
// import ChatArea from "@/components/chat/chat-area";
// import ChatInput from "@/components/chat/chat-input";
// import Sidebar from "@/components/layout/sidebar";
// import Header from "@/components/layout/header";
// import FeedbackPanel from "@/components/feedback/feedback-panel";
// import { useLanguage } from "@/lib/language-context";
// import { useAuth } from "@/lib/auth-context";
// import CoffeeElements from "@/components/decorative/coffee-elements";
// import HeroSection from "@/components/decorative/hero-section";
// import { sendChatMessage } from "@/lib/api";

// export default function Home() {
//   const { user } = useAuth();
//   const { language } = useLanguage();

//   const [messages, setMessages] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState("");
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [chatHistory, setChatHistory] = useState<any[]>([]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const chatEndRef = useRef<HTMLDivElement>(null);

//   // Load stored history + session
//   useEffect(() => {
//     setSessionId(`session-${Date.now()}`);

//     if (user) {
//       const saved = localStorage.getItem(`history-${user.id}`);
//       if (saved) setChatHistory(JSON.parse(saved));
//     }
//   }, [user]);

//   // ------------------------- SAFE MESSAGE HANDLER -------------------------
//   const normalizeText = (response: any) => {
//     if (!response) return "⚠️ Something went wrong.";

//     if (typeof response === "string") return response;

//     return (
//       response.answer ||
//       response.reply ||
//       response.response ||
//       response.text ||
//       response.output ||
//       JSON.stringify(response) // last fallback (prevents crash)
//     );
//   };

//   const handleSendMessage = async (msg: string) => {
//     if (!msg.trim()) return;

//     const userMsg = { id: Date.now(), text: msg, sender: "user" };
//     setMessages((prev) => [...prev, userMsg]);

//     setIsLoading(true);

//     try {
//       const result = await sendChatMessage(msg, sessionId);
//       const cleanedReply = normalizeText(result);

//       const botMsg = { id: Date.now() + 1, text: cleanedReply, sender: "bot" };
//       setMessages((prev) => [...prev, botMsg]);

//       if (user) {
//         const updatedHistory = [...messages, userMsg, botMsg];
//         localStorage.setItem(`history-${user.id}`, JSON.stringify(updatedHistory));
//       }
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now() + 1,
//           text: "⚠️ Server issue — please try again.",
//           sender: "bot",
//         },
//       ]);
//     }

//     setIsLoading(false);
//   };
//   // ------------------------------------------------------------------------

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex h-screen bg-background relative overflow-hidden">
//       <CoffeeElements />

//       {/* SIDEBAR */}
//       <Sidebar
//         user={user}
//         history={chatHistory}
//         onLoadFromHistory={(q) => handleSendMessage(q)}
//         isOpen={mobileMenuOpen}
//         setIsOpen={setMobileMenuOpen}
//       />

//       {/* MOBILE OVERLAY */}
//       {mobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-40 lg:hidden"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       <div className="flex-1 flex flex-col relative z-10">
//         <Header isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

//         <main className="flex-1 overflow-hidden flex flex-col">
//           {messages.length === 0 ? (
//             <HeroSection />
//           ) : (
//             <ChatArea messages={messages} isLoading={isLoading} fontSize="text-[18px]" />
//           )}

//           <div ref={chatEndRef} />
//         </main>

//         <div className="border-t border-border bg-card/95 backdrop-blur-sm">
//           <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
//           <button
//             onClick={() => setShowFeedback(true)}
//             className="w-full px-4 py-3 text-white bg-[#704020] opacity-100 font-bold text-sm hover:bg-amber-900"
//           >
//             {language === "en"
//               ? "✨ End session & give feedback"
//               : "✨ Finalizar sessão e dar feedback"}
//           </button>
//         </div>
//       </div>

//       {showFeedback && (
//         <FeedbackPanel onClose={() => setShowFeedback(false)} sessionId={sessionId} />
//       )}
//     </div>
//   );
// }


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





  // Reset backend memory when page loads
  const BACKEND_URL = "https://baristcoffeebackend.onrender.com";
  useEffect(() => {
    fetch(`${BACKEND_URL}/reset-session`, { method: "POST" });
    setMessages([]); // reset UI messages too
  }, []);

  const handleSendMessage = async (msg: string) => {
    if (!msg.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), text: msg, sender: "user" }]);
    setIsLoading(true);

    try {
      const response = await sendChatMessage(msg);
      const cleaned =
        typeof response === "string"
          ? response
          : response.reply || response.answer || JSON.stringify(response);

      setMessages(prev => [...prev, { id: Date.now() + 1, text: cleaned, sender: "bot" }]);
    } catch {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "⚠️ Error — try again.", sender: "bot" }]);
    }

    setIsLoading(false);
  };


useEffect(() => {
  if (messages.length > 0) {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }
}, [messages]);


  return (
    <div className="flex h-screen relative overflow-hidden">
      <CoffeeElements />

      <Sidebar
        user={user}
        history={chatHistory}
        onLoadFromHistory={(q) => handleSendMessage(q)}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col relative z-10">
        <Header isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

        <main className="flex-1  overflow-y-auto">
          {messages.length === 0 ? (
            <HeroSection />
          ) : (
            <ChatArea messages={messages} isLoading={isLoading} />
          )}
          <div ref={chatEndRef} />
        </main>

        <div className="border-t bg-white">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          <button
            onClick={() => setShowFeedback(true)}
            className="w-full py-3 text-white bg-[#704020] font-medium hover:bg-[#59301a]"
          >
           {language === "pt" 
             ? "✨ Encerrar sessão e enviar feedback" 
             : "✨ End session & give feedback"}
          </button>
        </div>
      </div>

      {showFeedback && (
        <FeedbackPanel onClose={() => setShowFeedback(false)} sessionId={sessionId} />
      )}
    </div>
  );
}
