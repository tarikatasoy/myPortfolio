
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_LINKS } from "./data";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="#home" className="group flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-lg font-bold text-white transition-transform group-hover:scale-105">
            T
          </div>
          <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-xl font-bold tracking-tight text-transparent">
            Tarık&nbsp;Atasoy
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex md:items-center md:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                className="group relative font-medium text-gray-300 transition-colors hover:text-cyan-400"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* <ThemeToggle /> */}

          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-800 md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg md:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-gray-300 transition-all hover:bg-gray-800 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
