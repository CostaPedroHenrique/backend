const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.post("/produtos", multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({rotas:'funcionando!!!'});
});


module.exports = routes;
