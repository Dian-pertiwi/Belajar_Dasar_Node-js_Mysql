var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE employees", function (err, result) {
  if (err) throw err;

  var sql = `INSERT INTO member(name, address)
            VALUES ('Gamelab','Salatiga'),
            ('Educa','Salatiga')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affaectedRows);
  });
});

const My_Choise = (num1, num2) => {
    const result = num1 + num2; 
    return result;
}

console.log("result =", My_Choise(5, 5));
