var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE employees", function (err, result) {
  if (err) throw err;

  //kita akan menghapus name yang memiliki kata java
  const sql = `DELETE FROM member WHERE name LIKE '%Java'`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
