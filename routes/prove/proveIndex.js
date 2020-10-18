const routes = require('express').Router();

const prove01Routes = require('./prove01');
const prove02Routes = require('./prove02');

routes 
    .use('/prove01Routes', prove01Routes)
    .use('/prove02Routes', prove02Routes)
    .get('/', (req, res, next) => {
        res.render('pages/index', {
            pageTitle: 'Prove', 
            path: '/proveAssignments'
        })
    });

    module.exports = routes;
    
