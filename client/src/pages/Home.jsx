import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function Home() {
  const [locationWeather, setLocationWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await axios.get(`${backendURL}/api/weather/current?lat=${latitude}&lon=${longitude}`);
          setLocationWeather(res.data);

          const forecastRes = await axios.get(`${backendURL}/api/weather/forecast?lat=${latitude}&lon=${longitude}`);
          setForecast(forecastRes.data.list.slice(0, 5));
        } catch (err) {
          setError('Unable to fetch weather');
        }
      },
      (error) => {
        setError('Unable to get your location');
      }
    );
  }, []);

  const formik = useFormik({
    initialValues: { city: '' },
    onSubmit: async (values) => {
      try {
        await axios.post(`${backendURL}/api/history`, { city: values.city });
      } catch (err) {
        console.error('Failed to save history', err);
      }
      navigate(`/weather/${values.city}`);
    }
  });

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900'} min-h-screen flex flex-col items-center justify-start py-10 px-4 sm:px-6 lg:px-8 transition-colors`}>
      <div className={`${darkMode ? 'bg-black' : 'bg-white'} w-full max-w-xl rounded-2xl shadow-lg p-6 sm:p-8 relative`}>

        {/* Header and Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300 text-center w-full">🌍 Your Local Weather</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full focus:outline-none hover:scale-105 transition-transform"
            aria-label="Toggle Dark Mode"
            title="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Current Weather */}
        {locationWeather ? (
          <div className="bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-500 rounded-xl p-6 mb-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300">{locationWeather.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <p className="text-gray-800 dark:text-gray-100">🌡️ Temp: <span className="font-medium text-green-600 dark:text-yellow-400">{locationWeather.main?.temp}°C</span></p>
              <p className="text-gray-800 dark:text-gray-100">🤒 Feels Like: <span className="font-medium text-green-600 dark:text-yellow-400">{locationWeather.main?.feels_like}°C</span></p>
              <p className="text-gray-800 dark:text-gray-100">💧 Humidity: <span className="font-medium text-green-600 dark:text-yellow-400">{locationWeather.main?.humidity}%</span></p>
              <p className="text-gray-800 dark:text-gray-100">🌬️ Wind: <span className="font-medium text-green-600 dark:text-yellow-400">{locationWeather.wind?.speed} m/s</span></p>
              <p className="sm:col-span-2 text-gray-800 dark:text-gray-100">🌥️ Condition: <span className="font-medium text-green-600 dark:text-yellow-400 capitalize">{locationWeather.weather?.[0]?.description}</span></p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">{error || "📍 Fetching your location weather..."}</p>
        )}

        {/* City Search Form */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6" role="search" aria-label="City Weather Search">
          <input
            type="text"
            name="city"
            placeholder="🔍 Enter city name"
            onChange={formik.handleChange}
            value={formik.values.city}
            aria-label="Enter city"
            className="w-full sm:flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition-all duration-200 shadow-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
