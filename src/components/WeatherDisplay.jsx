export default function WeatherDisplay({ weather }) {
  if (!weather) return <p className="text-gray-500">Search for a city to see the weather.</p>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
      <h2 className="text-2xl font-bold">{weather.city}</h2>
      <p className="text-gray-500 dark:text-gray-300">{weather.condition}</p>
      <p className="text-4xl font-bold">{weather.temp}°C</p>
    </div>
  );
}
