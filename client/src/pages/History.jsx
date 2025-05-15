import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function History() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['history'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/api/history');
      return res.data;
    }
  });

  if (isLoading) return <p className="p-6 text-center text-blue-600">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-600">Error fetching history</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 p-8 animate-fadeZoom">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">🔍 Past Searches</h1>
        <ul className="space-y-4">
          {data.map((search) => (
            <li
              key={search._id}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 hover:bg-blue-100 hover:text-blue-900 border border-gray-300 rounded-xl px-6 py-4 shadow-sm transition-colors duration-300 ease-in-out"
            >
              <Link
                to={`/weather/${search.city}`}
                className="text-blue-700 text-xl font-semibold hover:underline truncate max-w-xs sm:max-w-sm"
                title={search.city}  // tooltip for long city names
              >
                {search.city}
              </Link>
              <span className="text-sm sm:text-base font-medium text-gray-600 mt-2 sm:mt-0 whitespace-nowrap">
                {new Date(search.searchedAt).toLocaleString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
