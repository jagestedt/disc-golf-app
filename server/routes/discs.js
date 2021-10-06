const express = require('express');
const router = express.Router();

const discs = require('../controllers/discs');

// Endpoints
router.get('/all', discs.all);

module.exports = router;
