import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import WeatherDetails from './pages/WeatherDetails';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-600 text-white p-4 flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/history">Search History</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
