const express = require('express');
const routes = require('./routes');
const BodyParser = require('body-parser');
const connection = require('./src/config/database');
const ipcModel = require('./src/app/models/Ipc');
const produto = require('./src/app/models/Produto');
const desc_produto = require('./src/app/models/Desc_Produto');


class App {
  constructor(){
    this.index = express();
    
    this.middlewares();
    this.routes();
  }
  middlewares(){
    this.index.use(express.json());
    this.index.set('view engine', 'ejs');
    this.index.use(express.static(__dirname + '/public/'));
    this.index.use(BodyParser.urlencoded({extended: false}));
    this.index.use(BodyParser.json());
  }

  routes(){
    this.index.use(routes);
  }
}

module.exports = new App().index;