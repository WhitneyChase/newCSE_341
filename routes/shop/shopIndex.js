const admin = require('./admin');
const shop = require('./shop');
const routes = require('express').Router();
const adminRoutes = require('./admin');
const shopRoutes = require('./shop');
const authRoutes = require('./auth');
const monfodb = require('../../utils/database');

routes 
    .use('/admin', adminRoutes)
    .use('/shop', shopRoutes)
    .use('/auth', authRoutes)
    .get('/', (req, res, next) => {
        res.render('shop/index', {
            pageTitle: 'Shop', 
            path: '/store'
        })
    });

    module.exports = routes;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};



const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Whitney-Chase-01:nitney15020@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";
