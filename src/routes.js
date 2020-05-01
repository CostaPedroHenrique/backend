const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const ColaboradorController = require('./controllers/ColaboradorController');
const ComercianteController = require('./controllers/ComercianteController');
const ProdutoController = require('./controllers/ProdutoController');
const ClienteController = require('./controllers/ClienteController');

routes.get('/colaboradores', ColaboradorController.index);
routes.post('/colaboradores', ColaboradorController.create);
routes.put('/colaboradores/:id', ColaboradorController.update);
routes.delete('/colaboradores/:id', ColaboradorController.delete);

routes.get('/comerciantes', ComercianteController.index);
routes.post('/comerciantes', ComercianteController.create);
routes.put('/comerciantes/:id', ComercianteController.update);
routes.delete('/comerciantes:id', ComercianteController.delete);

routes.get('/produtos', ProdutoController.index);
routes.post('/produtos', ProdutoController.create);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

routes.get('/clientes', ClienteController.index);
routes.post('/clientes', ClienteController.create);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.delete);

/*
routes.post("/produtos", multer(multerConfig).single('file'), (req, res) =>{
    console.log(req.file);
    return res.json({rotas:'funcionando!!!'});
});
*/

module.exports = routes;
