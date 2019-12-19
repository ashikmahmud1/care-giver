const express = require('express');
const caregiverProfileController = require('../controllers/caregiverProfileController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.param('id', caregiverProfileController.checkID);

router
  .route('/caregiver-profiles/top-5')
  .get(
    caregiverProfileController.aliasTopCaregiverProfiles,
    caregiverProfileController.getAllCaregiverProfiles
  );

// router.route("/tour-stats").get(caregiverProfileController.getTourStats);
// router
//   .route("/monthly-plan/:year")
//   .get(caregiverProfileController.getMonthlyPlan);

router
  .route('/caregiver-profiles')
  .get(
    authController.protect,
    caregiverProfileController.getAllCaregiverProfiles
  )
  .post(caregiverProfileController.createCaregiverProfile);

router
  .route('/caregiver-profile/:id')
  .get(caregiverProfileController.getCaregiverProfile)
  .patch(caregiverProfileController.updateCaregiverProfile)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    caregiverProfileController.deleteCaregiverProfile
  );

module.exports = router;
