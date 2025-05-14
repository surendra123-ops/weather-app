const axios = require('axios');
const API_KEY = process.env.WEATHER_API_KEY;

exports.getWeatherByCity = async (req, res) => {
  const { city } = req.query;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: "City not found or API error" });
  }
};

exports.getWeatherByCoords = async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: "Location error or API error" });
  }
};
