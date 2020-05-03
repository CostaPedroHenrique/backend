const knex = require('knex');

module.exports = {
    async index(req, res) {
        const results = await knex('produtos');

        return res.json(results)
    },

    async create(req, res, next) {
        console.log(rq.file);
        try {
            const { name, price, type, description, distribuidor_id, image } = req.body
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
            const { name, price, type, description, distribuidor_id, image } = req.body;
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