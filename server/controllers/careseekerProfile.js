const CareseekerProfile = require('../models/careseekerProfileModel');
// const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getCareseekerProfile = catchAsync(async (req, res, next) => {
  const careseekerProfile = await CareseekerProfile.findById(req.params.id);
  // CareseekerProfile.findOne({ _id: req.params.id })

  if (!careseekerProfile) {
    return next(new AppError('No Careseeker Profile found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      careseekerProfile
    }
  });
});

exports.createCareseekerProfile = catchAsync(async (req, res, next) => {
  const newCareseekerProfile = await CareseekerProfile.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      careseekerProfile: newCareseekerProfile
    }
  });
});

exports.updateCareseekerProfile = catchAsync(async (req, res, next) => {
  const careseekerProfile = await CareseekerProfile.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!careseekerProfile) {
    return next(new AppError('No Careseeker Profile found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      careseekerProfile
    }
  });
});

exports.deleteCareseekerProfile = catchAsync(async (req, res, next) => {
  const careseekerProfile = await CareseekerProfile.findByIdAndDelete(
    req.params.id
  );

  if (!careseekerProfile) {
    return next(new AppError('No Careseeker Profile found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
