import { useWeather } from "../WeatherContext";

export default function SearchHistory() {
  const { history, fetchWeather } = useWeather();
  if (!history.length) return null;

  return (
    <div className="max-w-md mx-auto mt-6">
      <h3 className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
        Recent searches
      </h3>
      <div className="flex flex-wrap gap-2">
        {history.map((city, i) => (
          <button
            key={`${city}-${i}`}
            onClick={() => fetchWeather(city)}
            className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm capitalize"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
