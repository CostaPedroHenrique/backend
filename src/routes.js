const routes = require('express').Router();

routes.get("/",(require, response)=>{
    response.send("rotas funcionando!");
});


module.exports = routes;
