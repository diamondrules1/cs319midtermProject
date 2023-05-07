const mysql = require('mysql');
const db = mysql.createConnection({
    host: "127.0.0.1",
    database: "reactmysql"
});
module.exports = db;