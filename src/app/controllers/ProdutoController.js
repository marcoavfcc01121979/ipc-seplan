const Produto = require('../models/Produto');
const Sequelize = require('sequelize');

module.exports = {
  async list(req,res){
    res.render('admin/produtos/new');
  },
  
  async store(req,res){
    const { name_product } = req.body;

    if(name_product !== undefined){
      Produto.create({
        nome_tipo_produto: name_product
      }).then(() => {
        res.redirect('/admin/produtos');
      });
    }else{
      res.redirect('admin/produtos/new');
    }
  },
  async index(req,res){
    Produto.findAll().then(produtos => {
      res.render('admin/produtos/index', {produtos: produtos});
    });
  },
  async delete(req,res){
    const { id } = req.body;

    if(id !== undefined){
      if(!isNaN(id)){
        Produto.destroy({
          where: {
            id: id
          }
        }).then(() => {
          res.redirect('/admin/produtos');
        })
      }else{
        res.redirect('/admin/produtos');
      }
    }
    else{
      res.redirect('/admin/produtos');
    }
  },
  async update(req,res){
    const { id } = req.params

    if(isNaN(id)){
      res.redirect('/admin/produtos');
    }
    Produto.findByPk(id).then(produto => {
      if(produto !== undefined){
        res.render('admin/produtos/edit', { produto: produto })
      }else {
        res.redirect('/admin/produtos');
      }
    }).catch(erro => {
      res.redirect('/admin/produtos');
    })
  },
  async save(req,res){
    const { id, name_product } = req.body;

    Produto.update({ nome_tipo_produto: name_product }, {
      where: {
        id: id
      }
    }).then(() => {
      res.redirect('/admin/produtos');
    })

    res.render();
  }
} 