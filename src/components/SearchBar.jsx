import { useState } from "react";
import { useWeather } from "../WeatherContext";

export default function SearchBar() {
  const { fetchWeather, loading } = useWeather();
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    fetchWeather(city.trim());
    setCity("");
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl mx-auto flex gap-2">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search a city…"
        className="flex-1 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        disabled={loading}
        className="rounded-2xl px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
