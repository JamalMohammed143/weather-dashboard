import React, { useState, useRef } from "react";
import { useWeather } from "../WeatherContext";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const GEO_API_KEY = "5f628abcc5mshcb976bc413de891p18bc03jsn287e19ba5686";

const fetchCitySuggestions = async (query) => {
  if (!query) return [];
  try {
    const res = await fetch(
      `${GEO_API_URL}?namePrefix=${encodeURIComponent(query)}&limit=5`,
      {
        headers: {
          "X-RapidAPI-Key": GEO_API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.data.map((city) => city.city);
  } catch {
    return [];
  }
};

export default function SearchBar() {
  const { fetchWeather, loading } = useWeather();
  const [city, setCity] = useState("");
  const [inputError, setInputError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimeout = useRef();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    setInputError("");
    setShowSuggestions(true);

    // Clear any existing debounce timer
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    // Only call API if 3 or more characters are typed
    if (value.trim().length >= 3) {
      debounceTimeout.current = setTimeout(async () => {
        const sugg = await fetchCitySuggestions(value.trim());
        setSuggestions(sugg);
      }, 1000); // 3 seconds debounce
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setInputError("Please enter a city name.");
      return;
    }
    setInputError("");
    fetchWeather(city.trim());
    setCity("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-xl mx-auto flex gap-2 relative"
    >
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Search a city…"
        className="flex-1 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-2xl px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Searching…" : "Search"}
      </button>
      {inputError && <div className="text-red-500 mt-1">{inputError}</div>}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 top-10 rounded-md z-10 list-none m-0 p-0 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
          {suggestions.map((s, idx) => (
            <li
              key={s + idx}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              onMouseDown={() => handleSuggestionClick(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
