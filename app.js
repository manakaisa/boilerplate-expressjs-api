var express = require('express');
var path = require('path');
var logger = require('morgan');

// Import routers
var indexRouter = require('./routes/index');

// Handle middlewares
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handle routers
app.use('/', indexRouter);

// Handle errors
// 404
app.use(function (req, res, next) {
  res.status(404).json('Not Found');
});
// 500
app.use(function (err, req, res, next) {
  res.status(500).json(req.app.get('env') === 'development' ? err.message : '');
})

module.exports = app;
