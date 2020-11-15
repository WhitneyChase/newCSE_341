const routes = require('express').Router();
const ta01 = require('./ta01');
const ta02 = require('./ta02');
const ta03 = require('./ta03'); 
const ta04 = require('./ta04');
const ta05 = require('./ta05'); 
const ta09 = require('./ta09');

routes
    .use('/ta01', ta01)
    .use('/ta02', ta02)
    .use('/ta03', ta03)
    .use('/ta04', ta04)
    .use('/ta05', ta05)
    .use('/ta09', ta09)
    .get('/', (req, res, next) => {
        res.render('pages/index', {
            pageTitle: 'Team Activities', 
            path: '/teamActivites'
        })
    });

    module.exports = routes;