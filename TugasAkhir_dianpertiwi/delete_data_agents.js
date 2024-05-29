var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE db_tugasakhir", function (err, result) {
  if (err) throw err;

  const sql = `DELETE FROM agents WHERE agent_name = 'Alford'`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + "record(s) deleted");
  });
});
