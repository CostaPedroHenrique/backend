const knex = require('knex');

module.exports = {
    async index(req, res) {
        const results = await knex('comerciantes');

        return res.json(results)
    },

    async create(req, res, next) {
        try {
            const { name, email, latitude, longitude } = req.body
            await knex('comerciantes')
                .insert(
                    {
                        name,
                        email,
                        latitude,
                        longitude
                    }
                );
            return res.status(201).send()
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { name, email, latitude, longitude } = req.body;
            const { id } = req.params;
            await knex('comerciantes')
                .update({
                    name,
                    email,
                    latitude,
                    longitude
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
            await knex('comerciantes')
                .where({ id }).del();

            return res.send()

        } catch (error) {
            next(error)
        }
    }


}