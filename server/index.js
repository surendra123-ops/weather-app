// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (Optional, since it's not directly used in your weather API, but leaving it in case you need it)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

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
