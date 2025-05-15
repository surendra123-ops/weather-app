import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function WeatherDetails() {
  const { city } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['weather', city],
    queryFn: async () => {
      const res = await axios.get(`${backendURL}/api/weather?city=${city}`);
      return res.data;
    }
  });

  if (isLoading) return <p className="p-6 text-center text-lg">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-600 text-lg">Error fetching weather</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg rounded-lg space-y-6 sm:w-full md:max-w-3xl lg:max-w-4xl">
      <h1 className="text-3xl font-semibold text-center text-white drop-shadow-lg">{data.name}</h1>
      
      <div className="flex flex-col sm:flex-row sm:space-x-6 sm:items-start justify-center sm:justify-between space-y-6 sm:space-y-0">
        <div className="space-y-3 text-center sm:text-left text-white">
          <p className="text-lg transition-transform duration-200 hover:translate-x-2">
            <strong>Temperature:</strong> {data.main.temp}°C
          </p>
          <p className="text-lg transition-transform duration-200 hover:translate-x-2">
            <strong>Humidity:</strong> {data.main.humidity}%
          </p>
          <p className="text-lg transition-transform duration-200 hover:translate-x-2">
            <strong>Wind Speed:</strong> {data.wind.speed} m/s
          </p>
          <p className="text-lg transition-transform duration-200 hover:translate-x-2">
            <strong>Condition:</strong> {data.weather[0].main}
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto sm:mx-0 transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
