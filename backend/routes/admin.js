// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/adminController');
// const adminAuth = require('../middleware/adminAuth');
// const exportController = require('../controllers/exportController'); 

// router.post('/login', adminController.login);
// router.get('/feedbacks', adminAuth, adminController.getFeedbacks);

// router.post('/export', adminAuth, exportController.exportFeedbacks);


// module.exports = router;


const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const exportController = require('../controllers/exportController');

// ADMIN LOGIN (still available if needed)
router.post('/login', adminController.login);

// ⚠️ AUTH DISABLED FOR DASHBOARD
// Admin dashboard should work directly after frontend modal login
router.get('/feedbacks', adminController.getFeedbacks);
router.post('/export', exportController.exportFeedbacks);

module.exports = router;
