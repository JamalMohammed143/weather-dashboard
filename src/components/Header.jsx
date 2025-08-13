import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-800 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold">Weather Dashboard</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
