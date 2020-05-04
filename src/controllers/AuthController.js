const knex = require('../database');
module.exports = {
    async auth(req, res) {
        const { name, password } = req.body;
        const distribuidores = await knex('distribuidores').where({name, password});
        const comercio = await knex('comercio').where({name, password});
        
        if(distribuidores.length>0){
            const results = distribuidores;
            results.push('distribuidor');
            return res.json(results);        
        }
        else if(comercio.length>0){
            const results = comercio;
            results.push('comerciante');
            return res.json(results);
        }
        else{
            return res.json(null);
        }
        
        
    },
}