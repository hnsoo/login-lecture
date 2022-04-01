const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
    host: "",  // 엔드포인트 주소
    user: "admin",
    password: "1234",
    database: "login-lecture"
});

db.connect();

module.exports = db;