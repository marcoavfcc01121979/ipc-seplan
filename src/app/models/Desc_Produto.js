const Sequelize = require('sequelize');
const connection = require('../../config/database');
const Produto = require('./Produto');

const Desc_Produto = connection.define('desc_produto', {
  nome_desc_produto: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Produto.hasMany(Desc_Produto);
Desc_Produto.belongsTo(Produto);

//Desc_Produto.sync({ force: true })

module.exports = Desc_Produto;