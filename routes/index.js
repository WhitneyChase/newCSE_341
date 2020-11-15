const routes = require('express').Router();
const taRoutes = require('./ta/taIndex');
const proveRoutes = require('./prove/proveIndex'); 
const shopRoutes = require('./shop/shopIndex');

routes 
    .use('/taRoutes', taRoutes) 
    .use('/proveRoutes', proveRoutes) 
    .use('/shopRoutes', shopRoutes) 

    .get('/', (req, res, next) => {
        res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
       })
      .use((req, res, next) => {
        res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
      })

      module.exports = routes;