const express = require('express');
const router = express.Router();
const {
  logSearch,
  getSearches
} = require('../controllers/searchController');

router.post('/search', logSearch);      // POST /api/search
router.get('/searches', getSearches);   // GET /api/searches

module.exports = router;
