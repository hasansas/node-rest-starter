'use strict';

import { sync } from 'glob';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/sequelize.js')[env];
const sequalizeConfig = {
  ...config,
  ...{
    define: {
      underscored: true,
      underscoredAll: true,
      timestamps: true,
      paranoid: true
    }
  }
}
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], sequalizeConfig);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, sequalizeConfig);
}

sync(ROOT_DIR + '/api/**/**/model.js').forEach(function (file) {
  console.log(file)
  const model = require(file)(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
