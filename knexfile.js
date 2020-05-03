// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host:"tuffi.db.elephantsql.com",
      database: "lyjifqsb",
      user: "lyjifqsb",
      password: "mcxhYaJoO56-uXj1wZWepni0coOPRnO9",

    }
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`,
  }



};
