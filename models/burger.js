var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js")

var burger = sequelize.define('burger', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN, defaultValue: false
  }
}, {
  timestamps: true
});

burger.sync();

module.exports = burger;