const CaregiverProfile = require('../models/caregiverProfileModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.aliasTopCaregiverProfiles = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,hourlyWage'; //need to change this line according to the app specifications
  req.query.fields = 'name,hourlyWage,ratingsAverage,experience,services'; //need to change ''
  next();
};

exports.getAllCaregiverProfiles = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(CaregiverProfile.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const caregiverProfiles = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: caregiverProfiles.length,
    data: {
      caregiverProfiles
    }
  });
});

exports.getCaregiverProfile = catchAsync(async (req, res, next) => {
  const caregiverProfile = await CaregiverProfile.findById(req.params.id);
  // CaregiverProfile.findOne({ _id: req.params.id })

  if (!caregiverProfile) {
    return next(new AppError('No Caregiver Profile found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      caregiverProfile
    }
  });
});

exports.createCaregiverProfile = catchAsync(async (req, res, next) => {
  const newCaregiverProfile = await CaregiverProfile.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      caregiverProfile: newCaregiverProfile
    }
  });
});

exports.updateCaregiverProfile = catchAsync(async (req, res, next) => {
  const caregiverProfile = await CaregiverProfile.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!caregiverProfile) {
    return next(new AppError('No Caregiver Profile found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      caregiverProfile
    }
  });
});

exports.deleteCaregiverProfile = catchAsync(async (req, res, next) => {
  const caregiverProfile = await CaregiverProfile.findByIdAndDelete(
    req.params.id
  );

  if (!caregiverProfile) {
    return next(new AppError('No Caregiver Profile found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

// exports.getCaregiverProfileStats = catchAsync(async (req, res, next) => {
//   const stats = await CaregiverProfile.aggregate([
//     {
//       $match: { ratingsAverage: { $gte: 4.5 } }
//     },
//     {
//       $group: {
//         _id: { $toUpper: '$difficulty' },
//         numCaregiverProfiles: { $sum: 1 },
//         numRatings: { $sum: '$ratingsQuantity' },
//         avgRating: { $avg: '$ratingsAverage' },
//         avgPrice: { $avg: '$price' },
//         minPrice: { $min: '$price' },
//         maxPrice: { $max: '$price' }
//       }
//     },
//     {
//       $sort: { avgPrice: 1 }
//     }
// // {
// //  $match: { _id: { $ne: 'EASY' } }
// // }
//   ]);

//   res.status(200).json({
//     status: 'success',
//     data: {
//       stats
//     }
//   });
// });

// exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
//   const year = req.params.year * 1; // 2021

//   const plan = await CaregiverProfile.aggregate([
//     {
//       $unwind: "$startDates"
//     },
//     {
//       $match: {
//         startDates: {
//           $gte: new Date(`${year}-01-01`),
//           $lte: new Date(`${year}-12-31`)
//         }
//       }
//     },
//     {
//       $group: {
//         _id: { $month: "$startDates" },
//         numCaregiverProfileStarts: { $sum: 1 },
//         tours: { $push: "$name" }
//       }
//     },
//     {
//       $addFields: { month: "$_id" }
//     },
//     {
//       $project: {
//         _id: 0
//       }
//     },
//     {
//       $sort: { numCaregiverProfileStarts: -1 }
//     },
//     {
//       $limit: 12
//     }
//   ]);

//   res.status(200).json({
//     status: "success",
//     data: {
//       plan
//     }
//   });
// });
