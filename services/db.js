const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "http://rm-7xv2886y7enuol38h.mysql.rds.aliyuncs.com:3306",
 user: "underaj",
 password: "ching123!",
 database: "interior-design",
});

conn.connect();

module.exports = conn;