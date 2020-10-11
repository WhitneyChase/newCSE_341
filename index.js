
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
const app = express();
const mongoConnect = require('./utils/database');
const User = require('./models/user');


app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use(bodyParser.urlencoded({ extended: false }))
   .use('/', routes)
   .use((req, res, next) => {
    User.findById('5baa2528563f16379fc8a610')
      .then(user => {
        req.user = new User(user.name, user.email, user.cart, user._id);
        next();
      })
      .catch(err => console.log(err));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  //  mongoConnect(client => {
  //  })
   

   
