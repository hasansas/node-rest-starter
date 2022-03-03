/**
 * Sequelize Configuration
 */

'use strict';

require('dotenv').config();

const {
  DB_CONNECTION,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD
} = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "database_development",
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_CONNECTION
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "database_test",
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_CONNECTION
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_CONNECTION
  }
};
