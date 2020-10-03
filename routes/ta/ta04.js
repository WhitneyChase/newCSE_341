//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const TeamActivities = require('../controllers/ta');

router.get('/', TeamActivities.getTeam04);

module.exports = router;
