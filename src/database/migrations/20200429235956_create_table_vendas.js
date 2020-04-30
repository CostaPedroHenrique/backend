exports.up = knex => knex.schema.createTable('vendas', table => {
    table.increments('id'),
    table.integer('id_produto').notNullable(),
    table.integer('id_cliente').notNullable(),

    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('vendas');