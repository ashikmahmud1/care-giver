const mongoose = require('mongoose');
const slugify = require('slugify');
//const validator = require("validator");

const careseekerProfileSchema = new mongoose.Schema(
  {
    seniorName: {
      type: String,
      required: [true, 'A senior must have a name']
    },
    gender: {
      type: String,
      required: [true, 'A senior must have to specify gender']
    },
    age: {
      type: Number,
      required: [true, 'A senior must have to specify age']
    },
    address: {
      type: String,
      required: [true, 'A senior must have an address']
    },
    city: {
      type: String,
      required: [true, 'A senior must have a city']
    },
    state: {
      type: String,
      required: [true, 'A senior must have a state']
    },
    zip: {
      type: String,
      required: [true, 'A senior must have a zip']
    },
    physicalComplications: {
      type: String,
      required: [true, 'A senior must have to specify Physical Complications']
    },
    languages: {
      type: String,
      required: [true, 'A senior must have to specify Languages']
    },
    image: {
      type: String,
      required: [true, 'A senior must have a profile image']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
careseekerProfileSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// QUERY MIDDLEWARE
// careseekerProfileSchema.pre('find', function(next) {
careseekerProfileSchema.pre(/^find/, function(next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});

careseekerProfileSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
careseekerProfileSchema.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

  console.log(this.pipeline());
  next();
});

const CareseekerProfile = mongoose.model(
  'CareseekerProfile',
  careseekerProfileSchema
);

module.exports = CareseekerProfile;
