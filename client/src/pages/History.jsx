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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="p-6 text-red-600">Error fetching history</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">🔍 Past Searches</h1>
      <ul className="space-y-2">
        {data.map((search) => (
          <li key={search._id}>
            <Link
              to={`/weather/${search.city}`}
              className="text-blue-600 hover:underline"
            >
              {search.city}
            </Link>
            <span className="text-sm text-gray-500 ml-2">
              ({new Date(search.searchedAt).toLocaleString()})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
