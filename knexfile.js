// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'drona.db.elephantsql.com',
      database: 'wylowtoc',
      user: 'wylowtoc',
      password: 'slwN1o3JtjyB3nEGPDDuCOkAfuoXQrsz',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
