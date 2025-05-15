const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  city: { type: String, required: true },
  searchedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Search', searchSchema);
