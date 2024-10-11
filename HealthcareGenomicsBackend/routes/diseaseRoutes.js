const express = require('express');
const router = express.Router();
const diseaseController = require('../controllers/diseaseController');

// Route for Eye Disease Prediction
router.post('/predict-eye-disease', diseaseController.getEyeDiseasePrediction);

// Route for Heart Disease Prediction
router.post('/predict-heart-disease', diseaseController.getHeartDiseasePrediction);

module.exports = router;