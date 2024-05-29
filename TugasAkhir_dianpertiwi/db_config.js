// var mysql = require("mysql");

// var db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
// });

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected to Database");
// });

// //tambahkan code ini agar bisa di-infor.
// module.exports = db;

var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_tugasakhir",
});

db.connect(function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Connected to Database");
  }
});

module.exports = db;
