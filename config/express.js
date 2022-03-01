'use strict';

import jsonResponse from '../helpers/json_response';

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

export default function (app) {
  // Request body parser for url
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Request body parser for json
  app.use(bodyParser.json());

  // parsing multipart/form-data
  app.use(upload.array());

  // JSON response
  global.jsonResponse = jsonResponse;
};
