const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "rm-7xv2886y7enuol38h.mysql.rds.aliyuncs.com",
 user: "underaj",
 password: "ching123!",
 database: "interior-design",
});

conn.connect();

module.exports = conn;