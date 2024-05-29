var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE employees", function (err, result) {
  if (err) throw err;

  // Setelah database dipilih, jalankan perintah pembuatan tabel
  var sql = `CREATE TABLE member(
      id int NOT NULL AUTO_INCREMENT,
      name VARCHAR(225),
      address VARCHAR(225),
      PRIMARY KEY(id)
  )`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
