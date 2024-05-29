var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE employees", function (err, result) {
  if (err) throw err;

  var sql = " SELECT id,name,address FROM member ORDER BY name;";

  db.query(sql, function (err, result) {
    if (err) throw err;

    //gunakan perulangan untuk menampilkan data
    console.log(`ID \t NAME \t\t ADDRESS`);
    console.log(`-----------------------------------------`);
    result.forEach((mbr) => {
      console.log(`${mbr.id} \t ${mbr.name} \t ${mbr.address}`);
    });
  });
});
