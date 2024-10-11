const apiClient = require('../utils/apiClient');

// Controller for Eye Disease Prediction
exports.getEyeDiseasePrediction = async (req, res) => {
    try {
        const prediction = await apiClient.getEyeDiseasePrediction(req.body);
        res.status(200).json({ success: true, data: prediction });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Controller for Heart Disease Prediction
exports.getHeartDiseasePrediction = async (req, res) => {
    try {
        const prediction = await apiClient.getHeartDiseasePrediction(req.body);
        res.status(200).json({ success: true, data: prediction });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};