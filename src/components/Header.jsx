import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl md:text-2xl font-bold">Weather Dashboard</h1>
        <button
          onClick={() => setDark((d) => !d)}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-gray-200 dark:bg-gray-800 hover:scale-[1.02] transition"
          aria-label="Toggle theme"
          title="Toggle light/dark"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}
