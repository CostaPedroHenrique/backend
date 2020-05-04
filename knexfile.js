// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host:"tuffi.db.elephantsql.com",
      database: "ldpucrcu",
      user: "ldpucrcu",
      password: "2PuBTvpHhUncNyxStdDbWA7AXiTM4joO",

    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },
  



};
