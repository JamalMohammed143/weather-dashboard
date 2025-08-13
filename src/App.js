import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchHistory from "./components/SearchHistory";
import OutfitRecommendation from "./components/OutfitRecommendation";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchWeather = async (city) => {
    // Mock data for now
    const mockData = {
      city,
      condition: "Sunny",
      temp: Math.floor(Math.random() * 35),
    };
    setWeather(mockData);
    setHistory((prev) => [city, ...prev.filter((c) => c !== city)]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Header />
      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <SearchBar onSearch={fetchWeather} />
        <WeatherDisplay weather={weather} />
        {weather && <OutfitRecommendation temp={weather.temp} />}
        <SearchHistory history={history} onSelect={fetchWeather} />
      </main>
    </div>
  );
}
