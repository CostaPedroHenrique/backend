const knex = require('./../database/index');

module.exports = {
    async index(req, res){
       const results = await knex('colaboradores');
       return res.json(results);
    },

    async create(req, res, next){
        try {
            const {name, email, latitude, longitude, score, available} = req.body;
            await knex('colaboradores').insert({
                name, 
                email, 
                latitude, 
                longitude, 
                score, 
                available
            });
            return res.status(201).send()
        } catch (error) {
            next(error);
        }
        
       
        
    }

}