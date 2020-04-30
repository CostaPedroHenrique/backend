exports.up = knex => knex.schema.createTable('clientes', table => {
      table.increments('id'),
      table.text('name').unique().notNullable(),
      table.text('email').unique().notNullable(),
      table.float('latitude', 14, 10).notNullable(),
      table.float('longitude', 14, 10).notNullable(),

      table.timestamp('created_at').defaultTo(knex.fn.now()),
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  });


exports.down = knex => knex.schema.dropTable('clientes');

