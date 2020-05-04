const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('distribuidores');

        return res.json(results)
    },

    async create(req, res, next) {
        try {
            const { name, email, password, region } = req.body
            await knex('distribuidores')
                .insert(
                    {
                        name,
                        email,
                        password,
                        region
                    }
                );
            return res.status(201).send()
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { name, email, password, region } = req.body;
            const { id } = req.params;
            await knex('distribuidores')
                .update({
                    name,
                    email,
                    password,
                    region
                })
                .where({ id });
            return res.send()
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {

            const { id } = req.params;
            await knex('distribuidores')
                .where({ id }).del();

            return res.send()

        } catch (error) {
            next(error)
        }
    }


}