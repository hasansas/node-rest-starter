/**
 * Main application file
 */
'use strict';

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _router = _interopRequireDefault(require("./router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // const path = require('path');
// const router = require('./router').default;

var _dirname = _path["default"].resolve(); // Constant definition


global.ROOT_DIR = _path["default"].resolve(_dirname, './'); // Loading config from .env

global.ENV = require('dotenv').config({
  path: _path["default"].resolve(ROOT_DIR, ".env")
}); // Load router

(0, _router["default"])(app); // Turn on that server!

app.listen(3000, function () {
  console.log('App listening on port 3000');
});