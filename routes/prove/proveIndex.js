const routes = require('express').Router();

const prove01Routes = require('./prove01');
const prove02Routes = require('./prove02');
const prove10Routes = require('./prove10');

routes 
    .use('/prove01Routes', prove01Routes)
    .use('/prove02Routes', prove02Routes)
    .use('/prove10Routes', prove10Routes)
    .get('/', (req, res, next) => {
        res.render('pages/index', {
            pageTitle: 'Prove', 
            path: '/proveAssignments'
        })
    });

    module.exports = routes;
    