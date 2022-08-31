const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'cpostgres',
    port : 5432,
    user : 'postgres',
    password : 'msp',
    database : 'usuarios'
  }
});

module.exports = knex