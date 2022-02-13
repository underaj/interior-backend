const mysql = require('mysql');
require('dotenv').config();

const conn = mysql.createConnection({
 host: process.env.DATABASE_HOST,
 user: process.env.DATABASE_USER,
 password: process.env.DATABASE_PWD,
 database: "interior_design",
});

conn.connect();

module.exports = conn;
