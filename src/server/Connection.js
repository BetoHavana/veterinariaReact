// Basic connection
const Pool = require("pg").Pool;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'alberto900',
    database: 'Veterinaria',
    port: 3000
});

module.exports = pool;
