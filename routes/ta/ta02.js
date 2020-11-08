const express = require('express');

const TeamActivities = require('../controllers/ta');
const router = express.Router();



//get the the info from the add user form
router.post('/addUser', TeamActivities.postTeam02AddUser);


//get the the info from the remove user form
router.post('/removeUser', TeamActivities.postTeam02RemoveUser);


// router.get('/', TeamActivities.getTeam02);

module.exports = router;
