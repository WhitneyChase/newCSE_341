//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();


router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        users: userArray,
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});


router.post('/addUser',(req, res, next) => {
    res.render('pages/ta02/addUser', { 
        title: 'Team Activity Week 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.addUser,
    });
});

router.post('/submit',(req, res, next) => {
    res.render('pages/ta02/removeUser', { 
        title: 'Team Activity Week 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input2: req.body.rmvUser
    });
});

module.exports = router;
