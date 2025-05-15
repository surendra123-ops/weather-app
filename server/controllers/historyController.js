const Search = require('../models/Search');

exports.getSearchHistory = async (req, res) => {
  try {
    const history = await Search.find().sort({ searchedAt: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Server error while fetching history' });
  }
};

exports.addSearchHistory = async (req, res) => {
  const { city } = req.body;
  try {
    const newEntry = new Search({ city });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add city to history' });
  }
};
