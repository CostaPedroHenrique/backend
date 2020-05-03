const knex = require('knex');

module.exports = {
    async index(req, res) {
        const results = await knex('vendas');

        return res.json(results)
    },

    async create(req, res, next) {
        try {
            const { comercio_id, produto_id, distribuidor_id } = req.body
            await knex('vendas')
                .insert({
                    comercio_id, 
                    produto_id, 
                    distribuidor_id
                });
            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { comercio_id, produto_id, distribuidor_id } = req.body;
            const { id } = req.params;
            await knex('vendas')
                .update({
                    comercio_id, 
                    produto_id, 
                    distribuidor_id
                })
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            await knex('vendas')
                .where({ id }).del();

            return res.send();
        } catch (error) {
            next(error)
        }
    }

}