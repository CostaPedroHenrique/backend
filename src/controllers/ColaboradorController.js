const knex = require('./../database/index');

module.exports = {
    async index(req, res){
       const results = await knex('colaboradores');
       return res.json(results);
    },

    async create(req, res, next){
        try {
            const {name, email, latitude, longitude, score, available} = req.body;
            await knex('colaboradores')
            .insert({
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
    },

    async update(req, res, next){
        try {
            const {name, email, latitude, longitude, score, available} = req.body;
            const { id } = req.params
            await knex('colaboradores')
            .update({
                name, 
                email, 
                latitude, 
                longitude, 
                score, 
                available
            })
            .where({id});
            return res.send()
        } catch (error) {
            next(error);
        }
    },
    async delete(req, res, next){
        try {
            const {id} = req.params
            await knex('colaboradores')
            .where({id}).del();
            return res.send();
        } catch (error) {
            next(error);
        }
    }

}