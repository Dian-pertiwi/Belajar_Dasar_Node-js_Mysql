var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE db_tugasakhir", function (err, result) {
  if (err) throw err;

  const sql = `UPDATE agents SET working_area ='Indonesia' WHERE agent_code = 'A001'`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + "record(s) updated");
  });
});
