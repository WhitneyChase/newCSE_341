//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const TeamActivities = require('../../controllers/ta09');


//get the the info from the add user form
router.post('/ta09', TeamActivities.postTeam09);

router.get('/', TeamActivities.getTeam09);
router.get('/next', TeamActivities.getTeam09Next);
router.get('/prev', TeamActivities.getTeam09Prev);

module.exports = router;