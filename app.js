// Import dependencies
var express = require('express');
var path = require('path');

// Import routers
var routeAPI = require('./routes/api');

// Init Express app
var app = express();

// Handle middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handle routers
app.use('/', routeAPI);

// Handle errors
// 404
app.use(function (req, res, next) {
  res.status(404).json('Not Found');
});
// 500
app.use(function (err, req, res, next) {
  res.status(500).json(req.app.get('env') === 'development' ? err.message : '');
});

module.exports = app;
