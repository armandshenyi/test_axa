const express = require("express");
const app = express();
const mysql = require("mysql");

const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

DB.connect((err) => {
  if (err) {
    throw `error: ${err}`;
  }
  console.log("Database connected successfully");
});

app.listen(process.env._PORT, () => {
  console.log(`Server is running on ${process.env._PORT}`);
});
