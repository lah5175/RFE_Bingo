const Sequelize = require('sequelize');
const db = require('../db');

const Square = db.define('square', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    }
  }
})

module.exports = Square;