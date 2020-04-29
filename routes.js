const {Router} = require('express');

const IpcControllers = require('./src/app/controllers/IpcControllers');
const ProdutoController = require('./src/app/controllers/ProdutoController');
const DescProdutoController = require('./src/app/controllers/DescProdutoController');
const routes = new Router();

routes.get('/',(req,res)=>{
  res.render("index");
});

routes.get('/cadastrar', (req,res)=> {
  res.render("cadastrar");
})

routes.get('/admin/ipc/new', IpcControllers.list);
routes.post('/ipc/save', IpcControllers.store);
routes.get('/admin/ipc', IpcControllers.index);

routes.get('/admin/produtos/new', ProdutoController.list);
routes.get('/admin/produtos', ProdutoController.index);
routes.get('/admin/produtos/edit/:id', ProdutoController.update);
routes.post('/produtos/save', ProdutoController.store);
routes.post('/produtos/delete', ProdutoController.delete);
routes.post('/produtos/update', ProdutoController.save);

routes.get('/admin/descprodutos', DescProdutoController.index);
routes.get('/admin/descprodutos/new', DescProdutoController.list);
routes.post('/descprodutos/save', DescProdutoController.store);
routes.post('/descprodutos/delete', DescProdutoController.delete);
module.exports = routes;