const express = require('express');
const router = express.Router();

const discs = require('../controllers/discs');

// Endpoints
router.get('/all', discs.all);
router.post('/create', discs.create);

module.exports = router;
