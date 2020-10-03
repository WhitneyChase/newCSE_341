const express = require('express');

const proveAssignments = require('../controllers/prove');
const router = express.Router();

router.get('/', proveAssignments.getProve01);


router.post('/submit', proveAssignments.postProve01);

module.exports = router;
