

// Libraries
const mysql = require("mysql");

// DB connection Instance
const db = mysql.createConnection({
  host: process.env.NODE_ENV === "production" ? "database-1.caufirjh3w4l.us-east-2.rds.amazonaws.com" : "localhost",
  user:  process.env.NODE_ENV === "production" ? "admin": "root",
  password:  process.env.NODE_ENV === "production" ? "tharun@23" : "Password@123",
  database: "ecommerce1",
  port: 3306,
  timeout: 60000,
});

module.exports = { db };
