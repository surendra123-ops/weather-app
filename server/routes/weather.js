const express = require('express');
const router = express.Router();
const {
  getWeatherByCity,
  getWeatherByCoords
} = require('../controllers/weatherController');

router.get('/', getWeatherByCity); // /api/weather?city=XYZ
router.get('/current', getWeatherByCoords); // /api/weather/current?lat=..&lon=..

module.exports = router;
