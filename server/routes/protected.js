const express = require('express');
const router = express.Router();
const {getProtectedData} = require('../controllers/protected');
const {protect} = require('../middleware/auth');

router.route('/').get(protect, getProtectedData);

module.exports = router;
