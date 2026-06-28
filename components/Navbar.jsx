"use client";

import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">
          Pixelo<span className="text-violet-500">.</span>
        </span>
        <ul className="hidden md:flex gap-8 text-sm opacity-60">
          <li><a href="#hero" className="hover:opacity-100 transition">Home</a></li>
          <li><a href="#services" className="hover:opacity-100 transition">Services</a></li>
          <li><a href="#portfolio" className="hover:opacity-100 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-xl hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <a
            href="#contact"
            className="text-sm bg-violet-600 hover:bg-violet-700 transition px-4 py-2 rounded-full font-medium text-white">
          
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}