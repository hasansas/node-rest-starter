/**
 * Express Config
 */

'use strict';

import httpResponse from '../helpers/http_response';
import sendResponse from '../helpers/send_response';

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const expressValidator = require('express-validator');

export default function (app) {
  // Request body parser for url
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Request body parser for json
  app.use(bodyParser.json());

  // parsing multipart/form-data
  app.use(upload.array());

  // Validator
  global.expressValidator = expressValidator;

  // Response
  global.httpResponse = httpResponse;
  global.sendResponse = sendResponse;
};
