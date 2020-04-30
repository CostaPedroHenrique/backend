const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const knex = require('./database/index');


routes.get('/colaboradores', ()=>
    knex('colaboradores').then((results) => results.json(results)))


routes.post("/produtos", multer(multerConfig).single('file'), (req, res) =>{
    console.log(req.file);
    return res.json({rotas:'funcionando!!!'});
});


module.exports = routes;
