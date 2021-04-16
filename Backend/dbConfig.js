
require("dotenv").config();
// Libraries
const mysql = require("mysql");

// DB connection Instance
const db = mysql.createConnection({
  host:"database-1.caufirjh3w4l.us-east-2.rds.amazonaws.com",
  user:"admin",
  password:"tharun23",
  database: "ecommerce1",
  port: 3306,
  timeout: 60000,
});

module.exports = { db };
