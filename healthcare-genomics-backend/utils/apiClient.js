const axios = require('axios');

// Function to call Python Eye Disease Model
exports.getEyeDiseasePrediction = async (data) => {
    const response = await axios.post('http://localhost:5000/predict-eye-disease', data);
    return response.data;
};

// Function to call Python Heart Disease Model
exports.getHeartDiseasePrediction = async (data) => {
    const response = await axios.post('http://localhost:5000/predict-heart-disease', data);
    return response.data;
};