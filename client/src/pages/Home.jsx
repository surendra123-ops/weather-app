import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [locationWeather, setLocationWeather] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const res = await axios.get(`/api/weather/current?lat=${latitude}&lon=${longitude}`);
        setLocationWeather(res.data);
      } catch {
        setError('Unable to fetch weather');
      }
    });
  }, []);

  const formik = useFormik({
    initialValues: { city: '' },
    onSubmit: async (values) => {
      try {
        await axios.post('/api/history', { city: values.city }); // ✅ Save to MongoDB
      } catch (err) {
        console.error('Failed to save history', err);
      }
      navigate(`/weather/${values.city}`);
    }
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">🌍 Your Local Weather</h1>
      {locationWeather ? (
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-xl font-semibold">{locationWeather.name}</h2>
          <p>🌡️ Temp: {locationWeather.main?.temp}°C</p>
          <p>🤒 Feels Like: {locationWeather.main?.feels_like}°C</p>
          <p>💧 Humidity: {locationWeather.main?.humidity}%</p>
          <p>🌬️ Wind Speed: {locationWeather.wind?.speed} m/s</p>
          <p>🌥️ Condition: {locationWeather.weather?.[0]?.description}</p>
        </div>
      ) : (
        <p>{error || "Loading location..."}</p>
      )}

      <form onSubmit={formik.handleSubmit} className="space-x-2 mt-4">
        <input
          type="text"
          name="city"
          placeholder="Search by city"
          onChange={formik.handleChange}
          value={formik.values.city}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>
    </div>
  );
}
