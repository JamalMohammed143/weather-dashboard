import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import OutfitRecommendation from "./components/OutfitRecommendation";
import SearchHistory from "./components/SearchHistory";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div className="space-y-6">
          <SearchBar />
          <WeatherDisplay />
          <OutfitRecommendation />
          <SearchHistory />
        </div>
      </main>
    </div>
  );
}
