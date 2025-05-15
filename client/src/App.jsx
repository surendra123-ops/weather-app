import React from 'react'; // <-- Add this line
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import WeatherDetails from './pages/WeatherDetails';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white text-gray-900 flex flex-col">
      <nav className="bg-blue-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="text-lg font-semibold">WeatherApp</div>

          {/* Responsive Menu */}
          <div className="space-x-6 text-white text-sm sm:flex hidden">
            <Link
              to="/"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/history"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Search History
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/weather/:city" element={<WeatherDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="bg-blue-700 text-white p-4 text-center text-sm">
        &copy; 2025 WeatherApp. All rights reserved.
      </footer>
    </div>
  );
}


function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sm:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="focus:outline-none"
        aria-label="Toggle menu"
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-blue-700 rounded shadow-lg flex flex-col z-50">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="px-4 py-2 hover:bg-blue-600"
          >
            Home
          </Link>
          <Link
            to="/history"
            onClick={() => setOpen(false)}
            className="px-4 py-2 hover:bg-blue-600"
          >
            Search History
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="px-4 py-2 hover:bg-blue-600"
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
}
