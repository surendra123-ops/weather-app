const express = require('express');
const router = express.Router();
const {
  getSearchHistory,
  addSearchHistory
} = require('../controllers/historyController');

router.get('/', getSearchHistory);   // GET /api/history
router.post('/', addSearchHistory);  // POST /api/history

module.exports = router;
