var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE db_tugasakhir", function (err, result) {
  if (err) throw err;

  // Data yang akan ditambahkan ke tabel
  var sql =
    "INSERT INTO agents (AGENT_CODE, AGENT_NAME, WORKING_AREA, COMMISSION, PHONE_NO, COUNTRY) VALUES ?";
  var values = [
    ["A013", "DIAN PERTIWI", "Lombok", 0.1, "123-4567899", "Indonesia"],
  ];

  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
