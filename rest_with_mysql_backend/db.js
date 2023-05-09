const mysql = require('mysql');
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "adamFields",
    password: "adamFields",
    database: "reactmysql"
});
module.exports = db;