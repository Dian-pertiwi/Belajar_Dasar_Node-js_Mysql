// var db = require("./db_config");

// const sql = " CREATE DATABASE employees";
// db.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Database created");
// });

var db = require("./db_config");

var sql = `CREATE DATABASE member 
(
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  address VARCHAR(255), PRIMARY KEY (id)
  )`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});
