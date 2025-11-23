"use client";

import { useLanguage } from "@/lib/language-context";
import AuthModal from "@/components/auth/auth-modal";
import { useState } from "react";

interface ChatHistory {
  id: string;
  query: string;
  timestamp: number;
}

export default function Sidebar({
  user,
  history,
  onLoadFromHistory,
  isOpen,
  setIsOpen,
}: {
  user: any;
  history: ChatHistory[];
  onLoadFromHistory: (query: string) => void;
  isOpen?: boolean;
  setIsOpen?: (v: boolean) => void;
}) {
  const { language } = useLanguage();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const t = {
    en: {
      recentSearches: "Recent Searches",
      noHistory: "Your search history will appear here",
      signInToSave: "Sign in to save history",
      newChat: "New Chat",
      signIn: "Sign In",
    },
    pt: {
      recentSearches: "Pesquisas Recentes",
      noHistory: "Seu histórico de pesquisa aparecerá aqui",
      signInToSave: "Faça login para salvar histórico",
      newChat: "Novo Chat",
      signIn: "Entrar",
    },
  }[language];

  return (
    <>
      {/* BACKDROP */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen && setIsOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
     {/* MOBILE SLIDE SIDEBAR */}
<aside
  className={`lg:hidden fixed top-0 left-0 h-screen w-72 bg-white shadow-xl border-r border-border/40 z-50 transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>

  {/* TOP – New Chat */}
  <div className="p-5 border-b border-border/30">
    <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-semibold shadow hover:scale-105 transition">
      ✨ {t.newChat}
    </button>
  </div>

  {/* CONTENT AREA (scrollable) */}
  <div className="flex-1 flex flex-col overflow-y-auto">

    {/* CENTERED LOGO + TEXT */}
    {!user && (
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center mt-[200px]">
        <img src="/images/historyiconlogo.jpg" className="w-23 h-23 mb-2" />
        <p className="text-sm text-muted-foreground">{t.signInToSave}</p>
        <p className="text-xs text-muted-foreground mt-1">{t.noHistory}</p>
      </div>
    )}

    {/* HISTORY IF LOGGED IN */}
    {user && (
      <div className="px-4 py-4 space-y-2">
        <h3 className="text-xs font-bold mb-3 flex items-center gap-2">
          <img src="/historyiconlogo.jpg" className="w-5 h-5" />
          {t.recentSearches}
        </h3>

        {history.length > 0 ? (
          history
            .slice(-20)
            .reverse()
            .map((item, idx) => (
              <button
                key={idx}
                onClick={() => onLoadFromHistory(item.query)}
                className="w-full px-4 py-3 text-left text-sm rounded-lg hover:bg-primary/10 transition border border-transparent hover:border-primary/30"
              >
                {item.query}
              </button>
            ))
        ) : (
          <p className="text-xs text-muted-foreground text-center py-4">
            {t.noHistory}
          </p>
        )}
      </div>
    )}

  </div>

  {/* FIXED BOTTOM — SIGN-IN BUTTON */}
  <div className="border-t border-border/30 p-4 fixed bottom-0 left-0 w-72 bg-white">
    <button
      onClick={() => setShowAuthModal(true)}
      className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary "
    >
      👤
    </button>
  </div>
</aside>


      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-72 flex-col border-r border-border/40 bg-white">
        <div className="p-6 border-b border-border/30">
          <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-semibold hover:scale-105 transition">
            ✨ {t.newChat}
          </button>
        </div>

        {!user ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <img src="/images/historyiconlogo.jpg" className="w-24 h-24 mb-3" />
            <p className="text-sm text-muted-foreground">{t.signInToSave}</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5">
            <h3 className="text-xs font-bold mb-4 flex items-center gap-2">
              <img src="/historyiconlogo.jpg" className="w-5 h-5" />
              {t.recentSearches}
            </h3>

            {history.length > 0 ? (
              <div className="space-y-2">
                {history
                  .slice(-20)
                  .reverse()
                  .map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => onLoadFromHistory(item.query)}
                      className="w-full px-4 py-3 text-left rounded-lg hover:bg-primary/10 transition border border-transparent hover:border-primary/30"
                    >
                      {item.query}
                    </button>
                  ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground text-center py-6">
                {t.noHistory}
              </p>
            )}
          </div>
        )}

        <div className="border-t border-border/30 p-4">
          <button
            onClick={() => setShowAuthModal(true)}
            className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary"
          >
            👤
          </button>
        </div>
      </aside>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
}
