// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'drona.db.elephantsql.com',
      database: 'wylowtoc',
      user: 'wylowtoc',
      password: 'slwN1o3JtjyB3nEGPDDuCOkAfuoXQrsz',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    }
  },
   
};
