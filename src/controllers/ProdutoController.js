const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('produtos');

        return res.json(results)
    },

    async create(req, res, next) {
        console.log(req.body.info);

        
        try {
            const { name, price, type, description, distribuidor_id } = req.body.info;
            const image = req.file.filename;
            await knex('produtos')
                .insert({
                    name,
                    price,
                    type,
                    description,
                    distribuidor_id,
                    image
                });
            return res.status(201).send();
        } catch (error) {
            next(error);
        }
        
        
    },

    async update(req, res, next) {
        try {
            const { name, price, type, description, distribuidor_id } = req.body.info;
            const image = req.file.filename;
            const { id } = req.params;
            await knex('produtos')
                .update({
                    name,
                    price,
                    type,
                    image,
                    description,
                    distribuidor_id, 
                    image
                })
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            await knex('produtos')
                .where({ id }).del();

            return res.send();
        } catch (error) {
            next(error)
        }
    }

}