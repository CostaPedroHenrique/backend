const knex = require('knex');

module.exports = {
    async index(req, res) {
        const results = await knex('distribuidor');

        return res.json(results)
    },

    async create(req, res, next) {
        try {
            const { name, email, region } = req.body
            await knex('distribuidor')
                .insert(
                    {
                        name,
                        email,
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
            const { name, email, region } = req.body;
            const { id } = req.params;
            await knex('distribuidor')
                .update({
                    name,
                    email,
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
            await knex('distribuidor')
                .where({ id }).del();

            return res.send()

        } catch (error) {
            next(error)
        }
    }


}