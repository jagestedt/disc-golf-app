const express = require('express');
const router = express.Router();

const discs = require('../controllers/discs');

// Endpoints
router.get('/', discs.all);
router.post('/', discs.create);
router.get('/:id', discs.findOne);
router.put('/:id', discs.update);
router.delete('/:id', discs.delete);

module.exports = router;
