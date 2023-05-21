const AppError = require('../utils/appError');
const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');

//get all reviews
exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();
  res.status(200).json({
    status: 'success',
    data: {
      reviews
    }
  });

  next(new AppError('unable to create a review!!!'));
});

//create a review
exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      review: newReview
    }
  });

  next(new AppError('unable to create a review!!!'));
});
