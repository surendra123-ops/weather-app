// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = require('./config/db'); // Import the connectDB function from the db.js file
connectDB();

// ✅ Enhanced CORS to allow frontend origin
app.use(cors({
  origin: [' https://weather-app-1-aiau.onrender.com'],
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const weatherRoutes = require('./routes/weather');
const searchRoutes = require('./routes/search');
const historyRoutes = require('./routes/history');

// Register Routes
app.use('/api/weather', weatherRoutes);
app.use('/api', searchRoutes);
app.use('/api/history', historyRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
