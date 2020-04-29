const Sequelize = require('sequelize');
const DescProduto = require('../models/Desc_Produto');
const Produto = require('../models/Produto');

module.exports = {
  async index(req,res){
    DescProduto.findAll({
      include: [{ model: Produto }]
    }).then(descprodutos => {
      res.render("admin/descprodutos/index", { descprodutos: descprodutos });
    });
  },
  async list(req,res){
    Produto.findAll().then(produto => {
      res.render('admin/descprodutos/new', { produto: produto });
    });
  },
  async store(req,res){
    const { tipo_product, produtos } = req.body;

    DescProduto.create({
      nome_desc_produto: tipo_product,
      produtoId: produtos
    }).then(() => {
      res.redirect('/admin/produtos');
    });
  },
  async delete(req,res){
    const { id } = req.body;

    if(id !== undefined){
      if(!isNaN(id)){
        DescProduto.destroy({
          where: {
            id: id
          }
        }).then(() => {
          res.redirect('/admin/descprodutos');
        })
      }else{
        res.redirect('/admin/descprodutos');
      }
    }
    else{
      res.redirect('/admin/descprodutos');
    }
  }
}