/**
 * Main application file
 */

'use strict';

import express from 'express';
import path from 'path';
import http from 'http';
import configExpress from './config/express';
import router from './router';
import socketIO from './socket_io';
import authenticateJWT from './config/jwt';

const app = express();
const httpServer = http.createServer(app);


/****************************************
*       Global definition
****************************************/

// Global ROOT_DIR
global.ROOT_DIR = path.resolve(__dirname, './');

// Loading config from .env
global.ENV = require('dotenv').config({ path: path.resolve(ROOT_DIR, ".env") });
global.APP_HOST = ENV.parsed.APP_HOST;
global.APP_PORT = ENV.parsed.APP_PORT;

// JWT Middleware
global.authenticateJWT = authenticateJWT;


/****************************************
*         Socket IO
****************************************/

socketIO(httpServer);


/****************************************
*         Configuring express
****************************************/

// Load express configurations
configExpress(app);

// Load router
router(app);


/****************************************
*           Running Web Server
*****************************************/

// Start server
httpServer.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});
