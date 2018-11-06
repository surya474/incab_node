var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//Mongo Db Connection
mongoose.connect('mongodb://surya474:Surya4747@ds041678.mlab.com:41678/incab',{useNewUrlParser:true},function(err,db){
  if(err){
   console.log(err);
  }else {
     console.log('connected to the  db');
  }
});   


var db = mongoose.connection;

module.exports = db;


//routers importing
var HTTP_CODES = require('./shared/httpCode.util');
var LOGGER = require('./shared/logger.util');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
    
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//User routes
app.use('/incab', require('./routes/UsersRoutes/home.router'));       
app.use('/incab/user/auth', require('./routes/UsersRoutes/user.auth.router'))
app.use('/incab/user/getDrivers', require('./routes/UsersRoutes/user.nearCabs.route'))   
app.use('/incab/user/bookride',require('./routes/UsersRoutes/user.bookride.route'))
app.use('/incab/user/reqRideDetails',require('./routes/UsersRoutes/user.ridePriceDetails'))   

  
//Driver routes
app.use('/incab/driver/auth/',require('./routes/DriversRoutes/driver.auth.router'))
app.use('/incab/driver/notifications/',require('./routes/DriversRoutes/driver.notification.route'))
app.use('/incab/driver/avilability',require('./routes/DriversRoutes/driver.availability.route'))    
           
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
