var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE employees", function (err, result) {
  if (err) throw err;

  var sql = `INSERT INTO member(name, address)
VALUES ('Gamelab Indonesia','Jalan kesimbo salatiga')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
