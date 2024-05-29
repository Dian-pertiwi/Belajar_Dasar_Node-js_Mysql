var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE employees", function (err, result) {
  if (err) throw err;

  var sql = "INSERT INTO member (name, address) VALUES ?";
  var values = [
    ["JS Coffiee", "Highway 71"],
    ["3AM Coffiee", "Lowstreet 4"],
    ["Morning Brew", "Sunset Boulevard"],
    ["Java Joy", "Main Street"],
    ["Espresso Express", "Elm Avenue"],
    ["Mocha Madness", "Broadway"],
    ["Cappuccino Corner", "Maple Street"],
    ["Latte Lane", "Oak Street"],
    ["Coffee Cart", "Pine Street"],
    ["Brewed Bliss", "Cedar Street"],
    ["Bean Boulevard", "Willow Street"],
    ["Roast Road", "Cherry Street"],
    ["Bean Bistro", "Poplar Lane"],
    ["Brew Hub", "Mulberry Road"],
  ];

  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
