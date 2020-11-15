const admin = require('./admin');
const shop = require('./shop');
const routes = require('express').Router();
const adminRoutes = require('./admin');
const shopRoutes = require('./shop');
const authRoutes = require('./auth');


routes 
    .use('/auth', authRoutes)
    .use(adminRoutes)
    .use(shopRoutes)
    .get('/', (req, res, next) => {
        res.render('shop/adminn/login', {
            pageTitle: 'Login', 
            path: '/store'
        })
    });

    module.exports = routes;




// const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Whitney-Chase-01:nitney15020@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";