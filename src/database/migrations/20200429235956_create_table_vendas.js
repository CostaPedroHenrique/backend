exports.up = knex => knex.schema.createTable('vendas', table => {
    table.increments('id'),
    table.text('comercio_id').notNullable(),
    table.integer('produto_id').notNullable(),
    table.integer('distribuidor_id').notNullable(),

    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('vendas');