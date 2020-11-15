
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
const flash = require('connect-flash');
const app = express();
// const mongoConnect = require('./utils/database');
const User = require('./models/user');
const MONGODB_URI = process.env.MONGODB_URL || 'mongodb+srv://Whitney-Chase-01:nitney15020@cluster01.clet0.mongodb.net/<dbname>?retryWrites=true&w=majority'
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');




const errorController = require('./controllers/shop/error')
// const User = require('./models/user');


// const MONGODB_URI =
//   'mongodb+srv://Whitney-Chase-01:nitney15020@cluster01.clet0.mongodb.net/products';

  // const app = express();
  const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
  });
  const csrfProtection = csrf();

  
  // mongoose.set('useNewUrlParser', true);
  // mongoose.set('useFindAndModify', false);
  // mongoose.set('useCreateIndex', true);
  


  
  app.set('view engine', 'ejs');
  app.set('views', 'views');


app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
  //  .use(session({secret: 'dont be suspicious', resave: 'false', saveUninitialized: 'true', cookie: { secure: true}}))
   .use(bodyParser.urlencoded({ extended: false }))
   .use('/', routes)
   .use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
)
.use(csrfProtection)
.use(flash())

.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
  .then(user => {
    req.user = user;
    next();
  })
  .catch(err => console.log(err));
})

.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
})
// 
.listen(PORT, () => console.log(`Listening on ${ PORT }`));
 
  mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4      
  })
  .then(result => {
    // app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });
 

  
   

   