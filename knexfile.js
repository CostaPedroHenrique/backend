// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host:"tuffi.db.elephantsql.com",
      database: "ouzsnzym",
      user: "ouzsnzym",
      password: "bEdHUgR6bSqln57C24553gE2jBelgdtr",

    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },
  



};
