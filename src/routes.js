const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const DistribuidorController = require('./controllers/DistribuidorController');
const ProdutoController = require('./controllers/ProdutoController');
const ComercioController = require('./controllers/ComercioController');
const VendasController = require('./controllers/VendasController');
const AuthController = require('./controllers/AuthController');

routes.get('/distribuidor', DistribuidorController.index);
routes.post('/distribuidor', DistribuidorController.create);
routes.put('/distribuidor/:id', DistribuidorController.update);
routes.delete('/distribuidor/:id', DistribuidorController.delete);

routes.get('/produtos', ProdutoController.index);
routes.post("/produtos", multer(multerConfig).single('file'),ProdutoController.create);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

routes.get('/comercio', ComercioController.index);
routes.post('/comercio', ComercioController.create);
routes.put('/comercio/:id', ComercioController.update);
routes.delete('/comercio/:id', ComercioController.delete);

routes.get('/vendas', VendasController.index);
routes.post('/vendas', VendasController.create);
routes.put('/vendas/:id', VendasController.update);
routes.delete('/vendas/:id', VendasController.delete);

routes.get('/auth', AuthController.auth);





module.exports = routes;
