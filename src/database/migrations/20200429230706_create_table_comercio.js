exports.up = knex => knex.schema.createTable('comercio', table => {
      table.increments('id'),
      table.text('name').unique().notNullable(),
      table.text('email').unique().notNullable(),
      table.text('cep').notNullable(),

      table.timestamp('created_at').defaultTo(knex.fn.now()),
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  });


exports.down = knex => knex.schema.dropTable('comercio');

