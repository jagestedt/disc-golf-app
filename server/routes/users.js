const express = require('express');
const router = express.Router();

const {all} = require('../controllers/users');

// Endpoints
router.route('/all').get(all);

module.exports = router;
