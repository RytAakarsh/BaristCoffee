const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuth');
const exportController = require('../controllers/exportController'); 

router.post('/login', adminController.login);
router.get('/feedbacks', adminAuth, adminController.getFeedbacks);

router.post('/export', adminAuth, exportController.exportFeedbacks);


module.exports = router;