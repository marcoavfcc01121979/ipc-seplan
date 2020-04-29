const Sequelize = require('sequelize');
const connection = require('../../config/database');

const Ipc = connection.define('ipc', {
  nome_produto: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tipo_de_produto: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantidade: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  Preco: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },
  Data: {
    type: Sequelize.DATE(),
    allowNull: false
  },
  Varia_Mes: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },
  Acumulo_Ano: {
    type: Sequelize.DOUBLE,
    allowNull: true
  } 
});

//Ipc.sync({force: false}).then(() => {});
module.exports = Ipc;