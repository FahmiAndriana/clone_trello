const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const todoRouter = require('./app/api/todo/router');
const itemsRouter = require('./app/api/items/router');
const { version } = require('os');
const cors = require('cors');

// const URL = '/api/v1';

const app = express();


// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v1', function(req, res, next) {
  res.json(
    {
      name: 'API Trello',
      message: 'use /todos or /items',
      version: '1.0',
      date: new Date(),
      

    }
  )
})
app.use("/api/v1", todoRouter);
app.use("/api/v1", itemsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
