const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const UserController = require('./controllers/ColaboradorController');

routes.get('/colaboradores',UserController.index);
routes.post('/colaboradores',UserController.create);

/*
routes.post("/produtos", multer(multerConfig).single('file'), (req, res) =>{
    console.log(req.file);
    return res.json({rotas:'funcionando!!!'});
});
*/

module.exports = routes;
