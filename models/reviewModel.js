const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true
  },
  rating: { type: String, required: true },
  createdAt: { type: String, required: true },
  refTour: { type: String, required: true },
  refUse: { type: String, required: true }
});

const User = mongoose.model('User', reviewSchema);
// review / rating / createdAt / ref to tour / ref to use
