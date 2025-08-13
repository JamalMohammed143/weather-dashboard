import { useWeather } from "../WeatherContext";

const iconFor = (condition) => {
  const c = (condition || "").toLowerCase();
  if (c.includes("rain")) return "🌧️";
  if (c.includes("cloud")) return "☁️";
  if (c.includes("storm") || c.includes("thunder")) return "⛈️";
  if (c.includes("snow")) return "❄️";
  if (c.includes("mist") || c.includes("fog")) return "🌫️";
  return "☀️";
};

export default function WeatherDisplay() {
  const { weather, error } = useWeather();

  if (error)
    return (
      <div className="max-w-md mx-auto mt-6 rounded-2xl border border-red-300/60 bg-red-50 dark:bg-red-900/30 p-4 text-red-700 dark:text-red-200">
        {error}
      </div>
    );

  if (!weather)
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
        Search for a city to see the current weather.
      </p>
    );

  return (
    <div className="max-w-md mx-auto mt-6 p-6 rounded-3xl shadow-md bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{weather.city}</h2>
        <span className="text-4xl">{iconFor(weather.condition)}</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <div className="rounded-2xl bg-gray-50 dark:bg-gray-700 p-4">
          <p className="text-4xl font-bold">{weather.temp}°C</p>
          <p className="text-sm text-gray-500 capitalize">{weather.condition}</p>
        </div>
        <div className="rounded-2xl bg-gray-50 dark:bg-gray-700 p-4">
          <p className="text-2xl font-semibold">{weather.wind} km/h</p>
          <p className="text-sm text-gray-500">Wind</p>
        </div>
        <div className="rounded-2xl bg-gray-50 dark:bg-gray-700 p-4">
          <p className="text-2xl font-semibold">{weather.humidity}%</p>
          <p className="text-sm text-gray-500">Humidity</p>
        </div>
        <div className="rounded-2xl bg-gray-50 dark:bg-gray-700 p-4">
          <p className="text-2xl font-semibold">
            {weather.temp <= 0 ? "Freezing" : weather.temp < 20 ? "Cool" : "Warm"}
          </p>
          <p className="text-sm text-gray-500">Feels</p>
        </div>
      </div>
    </div>
  );
}
