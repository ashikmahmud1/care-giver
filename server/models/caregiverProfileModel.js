const mongoose = require('mongoose');
const slugify = require('slugify');

const caregiverProfileSchema = new mongoose.Schema(
  {
    hourlyWage: {
      type: String,
      required: [true, 'A Caregiver must specify Hourly Wage']
    },
    experience: {
      type: String,
      required: [true, 'A Caregiver must specify a group size']
    },
    transportation: {
      type: String,
      required: [true, 'A Caregiver must specify a transportation']
    },
    phone: {
      type: Number,
      required: [true, 'A caregiver must have a phone number']
    },
    address: {
      type: String,
      required: [true, 'A caregiver must have an address']
    },
    city: {
      type: String,
      required: [true, 'A caregiver must have a city']
    },
    state: {
      type: String,
      required: [true, 'A caregiver must have a state']
    },
    zip: {
      type: String,
      required: [true, 'A caregiver must have a zip']
    },
    image: {
      type: String,
      required: [true, 'A caregiver must have a image']
    }
    // images: [String],
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    //   select: false
    // }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// caregiverProfileSchema.virtual("durationWeeks").get(function() {
//   return this.duration / 7;
// });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
caregiverProfileSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// caregiverProfileSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// caregiverProfileSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// caregiverProfileSchema.pre('find', function(next) {
caregiverProfileSchema.pre(/^find/, function(next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});

caregiverProfileSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
caregiverProfileSchema.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

  console.log(this.pipeline());
  next();
});

const CaregiverProfile = mongoose.model(
  'CaregiverProfile',
  caregiverProfileSchema
);

module.exports = CaregiverProfile;
