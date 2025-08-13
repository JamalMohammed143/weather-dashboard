export default function SearchHistory({ history, onSelect }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="font-bold mb-2">Recent Searches</h3>
      <ul className="space-y-1">
        {history.map((item, idx) => (
          <li
            key={idx}
            onClick={() => onSelect(item)}
            className="cursor-pointer hover:text-blue-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
