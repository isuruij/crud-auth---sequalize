'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Function to recursively load models from directories
function loadModels(dir, sequelize) {
  fs.readdirSync(dir)
    .forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.lstatSync(filePath);
      if (stat.isDirectory()) {
        loadModels(filePath, sequelize); // If it's a directory, load models recursively
      } else if (file !== basename && file.slice(-3) === '.js') {
        const model = require(filePath)(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
      }
    });
}

// Load models from the current directory recursively
loadModels(__dirname, sequelize);

// Associate models if needed
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
