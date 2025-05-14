export default function About() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">About Weather App</h1>
      <p>This app shows current weather for your location or any searched city.</p>
      <p className="mt-2">🔗 Data is fetched from <a href="https://openweathermap.org/" className="text-blue-600 underline">OpenWeatherMap API</a>.</p>
      <p className="mt-2">🌐 Backend built with Node.js, Express, MongoDB Atlas.</p>
      <p>🎨 Frontend uses React, React Query, Tailwind CSS and Formik.</p>
    </div>
  );
}
