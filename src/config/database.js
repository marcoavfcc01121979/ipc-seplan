const Sequelize = require('sequelize');

const connection = new Sequelize('ipc', 'root', '1', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
});

module.exports = connection;