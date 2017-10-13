'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];
let sequelize;

if (process.env.JAWSDB_URL) {
  console.log("THIS IS IF tHERE IS A PROCESS ENV JAWSDB")
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log("THIS IS IF THERE ISNT JAWSDB")
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      dialect: 'postgres',
      host: config.host
    }
  );
}

let db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
