const Sequelize = require('sequelize');
const connection = require('../../config/database');


const Produto = connection.define('produto', {
  nome_tipo_produto: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

//Produto.sync({ force: true });

module.exports = Produto;