const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.js");
const { NODE_ENV } = require("../config/envConfig.js");

const env = NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

const db = {
  sequelize,
  Sequelize,
  models: {},
};

// Import models here
db.models.User = require("./user.js")(sequelize, DataTypes);

module.exports = db;
