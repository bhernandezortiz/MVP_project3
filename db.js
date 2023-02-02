const { Pool } = require("pg");

const dbConfig = {
    connectionString: process.env.DATABASE_URL
}


// user:'bhernandezortiz',
// password:'',
// port: 5432,
// database: 'skaterspotsdb',
// host: 'localhost',

const client = new Pool(dbConfig);

module.exports = client;