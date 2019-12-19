const express = require('express');
const careseekerProfileController = require('../controllers/careseekerProfileController');
const authController = require('../controllers/authController');

const router = express.Router();

// router
//   .route("/")
//   .get(
//     authController.protect,
//     careseekerProfileController.getAllCareseekerProfiles
//   )
//   .post(careseekerProfileController.createCareseekerProfile);

router
  .route('/careseeker-profile/:id')
  .get(careseekerProfileController.getCareseekerProfile)
  .patch(careseekerProfileController.updateCareseekerProfile)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    careseekerProfileController.deleteCareseekerProfile
  );

module.exports = router;
