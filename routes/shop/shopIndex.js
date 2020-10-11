const admin = require('./admin');
const shop = require('./shop');
const routes = require('express').Router();
const monfodb = require('../../utils/database');

routes 
    .use('/admin', admin)
    .use('/shop', shop)
    .get('/', (req, res, next) => {
        res.render('pages/index', {
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
