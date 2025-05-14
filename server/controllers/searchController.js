const Search = require('../models/Search');

exports.logSearch = async (req, res) => {
  const { city } = req.body;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const newSearch = new Search({ city });
    await newSearch.save();
    res.status(201).json(newSearch);
  } catch (error) {
    res.status(500).json({ error: "Failed to log search" });
  }
};

exports.getSearches = async (req, res) => {
  try {
    const searches = await Search.find().sort({ timestamp: -1 }).limit(10);
    res.json(searches);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch searches" });
  }
};
