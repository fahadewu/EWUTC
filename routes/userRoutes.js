const express = require('express');
const {home} = require('../controllers/homeControllers.js');
const router = express.Router();

router.get('/', home);

module.exports = router;