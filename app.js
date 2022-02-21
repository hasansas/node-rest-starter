/**
 * Main application file
 */

'use strict';

import express from 'express';
import path from 'path';
import configExpress from './config/express';
import router from './router';

/****************************************
*       Global definition
****************************************/

// Global ROOT_DIR
global.ROOT_DIR = path.resolve(__dirname, './');

// Loading config from .env
global.ENV = require('dotenv').config({ path: path.resolve(ROOT_DIR, ".env") });
global.APP_HOST = ENV.parsed.APP_HOST;
global.APP_PORT = ENV.parsed.APP_PORT;


/****************************************
*         Configuring express
****************************************/

const app = express();

// Load express configurations
configExpress(app);

// Load router
router(app);


/****************************************
*           Running Web Server
*****************************************/

// Start server
app.listen(APP_PORT, () => {
  console.log(`App listening on port 3000 ${APP_PORT}`);
});
