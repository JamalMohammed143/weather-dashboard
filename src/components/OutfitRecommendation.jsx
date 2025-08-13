import { useWeather } from "../WeatherContext";

const suggestionFor = ({ temp, condition }) => {
  const c = (condition || "").toLowerCase();
  if (c.includes("rain")) return "🌂 Take an umbrella and a waterproof jacket.";
  if (c.includes("snow")) return "🧣 Bundle up: coat, gloves, and boots.";
  if (temp < 10) return "🧥 Wear a warm coat.";
  if (temp < 20) return "🧶 Light jacket or sweater.";
  return "😎 Sunglasses suggested and light clothing.";
};

export default function OutfitRecommendation() {
  const { weather } = useWeather();
  if (!weather) return null;

  return (
    <div className="max-w-md mx-auto mt-4 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 p-4">
      {suggestionFor(weather)}
    </div>
  );
}
