
"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(mq.matches);
    const listener = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="group relative rounded-full p-2.5 text-gray-700 transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm dark:text-gray-300 dark:hover:bg-gray-700/30"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
