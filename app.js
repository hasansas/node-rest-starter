/**
 * Main application file
 */

 'use strict';

 import express from 'express';
 import path from 'path';
 import router from './router';
 
 const app = express();
 
 // Constant definition
 global.ROOT_DIR = path.resolve(__dirname, './');
 
 // Loading .env
 global.ENV = require('dotenv').config({ path: path.resolve(ROOT_DIR, ".env") });
 
 // Load router
 router(app);
 
 // Turn on that server!
 app.listen(3000, () => {
   console.log('App listening on port 3000');
 });
 