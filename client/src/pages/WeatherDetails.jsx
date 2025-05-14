import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function WeatherDetails() {
  const { city } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['weather', city],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      return res.data;
    }
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-600">Error fetching weather</p>;

  return (
    <div className="p-6 space-y-2">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p><strong>Temperature:</strong> {data.main.temp}°C</p>
      <p><strong>Humidity:</strong> {data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {data.wind.speed} m/s</p>
      <p><strong>Condition:</strong> {data.weather[0].main}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />
    </div>
  );
}
