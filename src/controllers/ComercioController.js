const knex = require('knex');

module.exports = {
    async index(req, res) {
        const results = await knex('comercio');
        return res.json(results);

    },

    async create(req, res, next) {
        try {

            const { name, email, cep } = req.body;
            await knex('comercio')
                .insert({
                    name,
                    email,
                    cep
                });

            return res.status(201).send()
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { name, email, latitude, longitude } = req.body;
            const { id } = req.params;
            await knex('comercio')
                .update({
                    name,
                    email,
                    cep
                })
                .where({ id });
            return res.send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params
            await knex('comercio')
                .where({ id }).del();
            return res.send();
        } catch (error) {
            next(error)
        }
    }

}