// controllers/reviewController.js
const { Review } = require('../models');

exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create review' });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20; // default to 20
    const offset = parseInt(req.query.offset) || 0;

    const reviews = await Review.findAll({ limit, offset });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};



