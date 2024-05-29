var db = require("./db_config");

// Pilih database yang akan digunakan terlebih dahulu
db.query("USE db_tugasakhir", function (err, result) {
  if (err) throw err;

  var sql = " SELECT * FROM agents WHERE AGENT_CODE = 'A002'";

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`AGENT_CODE \t AGENT_NAME \t\t\ WORKING_AREA \t\t PHONE_NO`);
    console.log(
      `-------------------------------------------------------------------------------------------`
    );

    result.forEach((mbr) => {
      console.log(
        `${mbr.AGENT_CODE} \t ${mbr.AGENT_NAME} \t\t ${mbr.WORKING_AREA} \t\t ${mbr.PHONE_NO}`
      );
    });
  });
});
