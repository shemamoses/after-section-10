const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'review cannot be empty']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  createdAt: {
    type: date,
    default: Date.now,
    required: true
  },
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: Tour,
    required: [true, 'Review must belong to a tour']
  },
  refUse: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user']
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
})
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

// review / rating / createdAt / ref to tour / ref to use
