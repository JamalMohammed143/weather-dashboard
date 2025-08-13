export default function OutfitRecommendation({ temp }) {
  let recommendation = "Wear what you like!";
  if (temp < 10) recommendation = "🧥 Wear a coat";
  else if (temp < 20) recommendation = "👕 Light jacket";
  else recommendation = "🩳 T-shirt weather!";

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="font-bold mb-2">Outfit Recommendation</h3>
      <p>{recommendation}</p>
    </div>
  );
}
