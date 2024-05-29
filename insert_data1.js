var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE employees", function (err, result) {
  if (err) throw err;

  var sql = `INSERT INTO member(id, name, address)
            VALUES (17, 'Gamelab','Salatiga'),
            (18, 'Educa','Salatiga')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affaectedRows);
  });
});
