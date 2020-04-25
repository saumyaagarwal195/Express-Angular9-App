var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
http=require('http');

var bcrypt=require('bcrypt');
var app = express();
//var app1=express.Router();
const server = http.createServer(app);
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors');

app.use(cors());

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {

    console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

//Connect
const io = socketIO(server);
module.exports.io = function(topic, data) {
    msg = {
        payload: data
    };
    io.emit(topic, msg);
    //console.log('topic is: ' + topic + ' msg: ' + msg.payload);
};
io.on('connection', (socket) => {
  
      console.log('Websocket Client Connected');
      //Disconnect
      socket.on('disconnect', (data) => {
          console.log('Websocket Client Disconnected');
      });
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const BBIDsRouter=require('./routes/BBIDs');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/BBIDs', BBIDsRouter);

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
