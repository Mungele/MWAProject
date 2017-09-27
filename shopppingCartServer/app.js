var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');
var UserController = require('./routes/UserController');
var AuthController = require('./routes/AuthController');
var DbController = require('./routes/DbController');
var ProductController = require('./routes/Products/ProductController');
var db = require('./db');
var app = require('./app');
var port = process.env.PORT || 3000;



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//enable CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', index);
app.use('/users', users);
app.use('/user', UserController);
app.use('/login', AuthController);
app.use('/db', DbController);
app.use('/products', ProductController);

app.use(function(req,res,next){
    var db = mongo.db('mongodb://127.0.0.1:27017/AishaDB',{native_parser:true});
    req.db=db;
    next();
    db.close();
    mongoose.connect('mongodb://cart1:shoppingcart1@ds147864.mlab.com:47864/mwacartdb', { useMongoClient: true });
});



var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
