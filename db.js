const { Pool } = require("pg");

const dbConfig = {
    user:'bhernandezortiz',
    password:'',
    port: 5432,
    database: 'skaterspotsdb',
    host: 'localhost',
    connectionString: process.env.DATABASE_URL
}

const client = new Pool(dbConfig);

module.exports = client;