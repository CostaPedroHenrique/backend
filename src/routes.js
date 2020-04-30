const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const knex = require('./database/index');


routes.get('/colaboradores', (req, res)=>
    knex('colaboradores').then((results) => res.json(results)))


routes.post("/produtos", multer(multerConfig).single('file'), (req, res) =>{
    console.log(req.file);
    return res.json({rotas:'funcionando!!!'});
});


module.exports = routes;
