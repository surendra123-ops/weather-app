export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="p-8 w-full max-w-3xl mx-auto bg-gray-300 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-blue-300">
        <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">
          About Weather App
        </h1>
        <p className="text-xl text-gray-700 text-center mb-8">
          This app shows the current weather for your location or any searched city.
        </p>
        <div className="space-y-6 bg-blue-100 p-4 rounded-lg">
          <p className="text-lg text-gray-900">
            🔗 Data is fetched from{' '}
            <a
              href="https://openweathermap.org/"
              className="text-blue-600 hover:text-blue-500 underline"
            >
              OpenWeatherMap API
            </a>
            .
          </p>
          <p className="text-lg text-gray-600">
            🌐 Backend built with Node.js, Express, MongoDB Atlas.
          </p>
          <p className="text-lg text-gray-600">
            🎨 Frontend uses React, React Query, Tailwind CSS, and Formik.
          </p>
        </div>
      </div>
    </div>
  );
}
