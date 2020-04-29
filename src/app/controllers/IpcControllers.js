const Ipc = require('../models/Ipc');
const Sequelize = require('sequelize');


Sequelize.DATE.prototype._stringify = function _stringify(date, options){
  return this._applyTimezone(date, options).format('DD-MM-YYYY')
}

module.exports = {
  async list(req,res){
    res.render("admin/ipc/new");
  },

  async store(req,res){
    const {nomeproduto,descricaoproduto,preco} = req.body;

    const isPrice = await Ipc.findOne({
      order: [['id', 'DESC']],
      attributes: ['Preco'],
    })

    if (!isPrice) {
      if(nomeproduto != undefined && descricaoproduto != undefined && preco != undefined) {

        function valor(){
          if (nomeproduto === 'arroz') {
            return 3.60;
          }else if (nomeproduto === 'acucar') {
            return 3.00;
          }else if (nomeproduto === 'banana') {
            return 7.50;
          }else if (nomeproduto === 'cafe') {
            return 0.30;
          }else if (nomeproduto === 'carne') {
            return 4.50;
          }else if (nomeproduto === 'farinha') {
            return 3.00;
          }else if (nomeproduto === 'feijao') {
            return 4.50;
          }else if (nomeproduto === 'leite') {
            return 6.00;
          }else if (nomeproduto === 'margarina') {
            return 0.75;
          }else if (nomeproduto === 'oleo') {
            return 0.90;
          }else if (nomeproduto === 'pao') {
            return 6.00;
          }else if (nomeproduto === 'tomate') {
            return 12.00;
          }
        }
        
        /*function variant(){
          if(nomeproduto !== Ipc.nome_produto){

          }
        }*/
        //console.log(valor());
        Ipc.create({
          nome_produto: nomeproduto,
          tipo_de_produto: descricaoproduto,
          quantidade: valor(),
          Preco: preco,
          Data: new Date(), //(Date.now()).toISOString(),
          Varia_Mes: 0,
          Acumulo_Ano: 0,
        }).then(() => {
          res.redirect('/');
        });
        
      }else {
        res.render("admin/ipc/new");
      }  
    }
    /**
     * ate aqui o isPrice esta vazio
     */
    const oi = JSON.parse(JSON.stringify(isPrice))

    const price = oi.Preco;

    if(nomeproduto != undefined && descricaoproduto != undefined && preco != undefined) {

      function valor(){
        if (nomeproduto === 'arroz') {
          return 3.60;
        }else if (nomeproduto === 'acucar') {
          return 3.00;
        }else if (nomeproduto === 'banana') {
          return 7.50;
        }else if (nomeproduto === 'cafe') {
          return 0.30;
        }else if (nomeproduto === 'carne') {
          return 4.50;
        }else if (nomeproduto === 'farinha') {
          return 3.00;
        }else if (nomeproduto === 'feijao') {
          return 4.50;
        }else if (nomeproduto === 'leite') {
          return 6.00;
        }else if (nomeproduto === 'margarina') {
          return 0.75;
        }else if (nomeproduto === 'oleo') {
          return 0.90;
        }else if (nomeproduto === 'pao') {
          return 6.00;
        }else if (nomeproduto === 'tomate') {
          return 12.00;
        }
      }
      
      //console.log(valor());
      Ipc.create({
        nome_produto: nomeproduto,
        tipo_de_produto: descricaoproduto,
        quantidade: valor(),
        Preco: preco,
        Data: new Date(), //(Date.now()).toISOString(),
        Varia_Mes: ((preco/price-1)*100).toFixed(2),
        Acumulo_Ano: 0,
      }).then(() => {
        res.redirect('/');
      });
      
    }else {
      res.render("admin/ipc/new");
    }
  },

  async index(req,res){
    Ipc.findAll().then(ipc => {
      res.render('admin/ipc/index', {ipc: ipc});
    });
  }
}