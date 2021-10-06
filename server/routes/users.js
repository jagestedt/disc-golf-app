const express = require('express');
const router = express.Router();

const users = require('../controllers/users');

// Endpoints
router.get('/all', users.all);

module.exports = router;
