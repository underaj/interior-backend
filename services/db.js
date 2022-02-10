const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "rm-wz9k4a0a001y93vxf.mysql.rds.aliyuncs.com",
 user: "underaj",
 password: "ching123!",
 database: "interior-design",
});

conn.connect();

module.exports = conn;