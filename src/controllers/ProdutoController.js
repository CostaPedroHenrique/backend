const knex = require('knex');

module.exports = {
    async index(req, res) {
        const results = await knex('produtos');

        return res.json(results)
    },

    async create(req, res, next) {
        try {
            const { name, price, type, image, description, id_comerciante } = req.body
            await knex('produtos')
                .insert({
                    name,
                    price,
                    type,
                    image,
                    description,
                    id_comerciante
                });
            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { name, price, type, image, description } = req.body;
            const { id } = req.params;
            await knex('produtos')
                .update({
                    name,
                    price,
                    type,
                    image,
                    description,
                    id_comerciante
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