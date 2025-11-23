"use client";

import { useAuth } from "@/lib/auth-context";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";

export default function Header({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const { user, logout, isLoading } = useAuth();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="border-b border-border/40 bg-card/95 backdrop-blur-xl px-4 py-3 flex items-center justify-between shadow-premium sticky top-0 z-30">
      {/* HAMBURGER */}
      <button
        aria-label="Toggle menu"
        className="lg:hidden text-2xl px-2 py-1 rounded hover:bg-muted/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* LOGO */}
      <Image
        src="/logo.png"
        alt="Barist.Ai"
        width={140}
        height={50}
        className="cursor-pointer"
      />

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* LANGUAGE SWITCHER */}
        <div className="flex gap-1 bg-muted rounded-full p-1.5 border border-border/30">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 text-sm font-semibold rounded-full transition ${
              language === "en" ? "bg-primary text-white" : "text-foreground"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("pt")}
            className={`px-3 py-1 text-sm font-semibold rounded-full transition ${
              language === "pt" ? "bg-primary text-white" : "text-foreground"
            }`}
          >
            PT
          </button>
        </div>

        {/* USER INFO (Desktop) */}
        {user && (
          <div className="hidden lg:flex items-center gap-3">
            {user.photoUrl && (
              <img
                src={user.photoUrl}
                className="w-9 h-9 rounded-full border border-primary"
              />
            )}
            <span className="text-sm">{user.name}</span>
            <button
              onClick={logout}
              disabled={isLoading}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {language === "en" ? "Logout" : "Sair"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
