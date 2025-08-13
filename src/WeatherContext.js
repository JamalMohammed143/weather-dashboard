import React, { createContext, useContext, useMemo, useState } from "react";

// Create the WeatherContext with a default value of null
// This will hold our weather-related data and functions.
const WeatherContext = createContext(null);

export function WeatherProvider({ children }) {
  // States to store the weather related data
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Your OpenWeatherMap API key (should be set in .env file)
  const OWM_KEY = process.env.REACT_APP_OWM_KEY; // optional

  // Function to normalize API data into a cleaner object
  const normalize = (raw, city) => ({
    city,
    temp: Math.round(raw.main.temp),
    condition: raw.weather?.[0]?.main?.toLowerCase() || "clear",
    wind: Math.round(raw.wind?.speed ?? 0),
    humidity: Math.round(raw.main?.humidity ?? 0),
  });

  // Fetch weather data from OpenWeatherMap API
  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      let data;
      // Make API call to fetch weather details for a city
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${OWM_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      data = await res.json();

      const w = normalize(data, city);
      setWeather(w);
      setHistory((prev) => {
        const next = [
          city,
          ...prev.filter((c) => c.toLowerCase() !== city.toLowerCase()),
        ];
        return next.slice(0, 5);
      });
    } catch (e) {
      console.error(e);
      setError(e.message || "Failed to fetch weather");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Memoize the value so that components only re-render when needed
  const value = useMemo(
    () => ({ weather, history, loading, error, fetchWeather }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [weather, history, loading, error]
  );

  // Return the Provider so children components can use the weather data
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export const useWeather = () => useContext(WeatherContext);
