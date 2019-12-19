const express = require('express');
const userController = require('./../controllers/userController');
//const caregiverProfileController = require('./../controllers/caregiverProfileController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/users', authController.signup); //
router.post('/signup-caregiver', authController.signup);
router.post('/login-caregiver', authController.login);

// router.post('/signup-careseeker', authController.signup);
// router.post('/login-careseeker', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

router.patch('/updateMe', authController.protect, userController.updateMe);
router.delete('/deleteMe', authController.protect, userController.deleteMe);

// router
//   .route('/') // .route('/caregiver-profiles')
//   .get(userController.getAllUsers) // .get(caregiverProfileController.getAllCaregiverProfiles)
//   .post(userController.createUser); // .post(caregiverProfileController.createCaregiverProfile);

// router
//   .route('/:id') //.route('/caregiver-profiles/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
