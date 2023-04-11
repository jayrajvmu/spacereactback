const mysql = require("mysql");

const connection = mysql.createConnection({
  // host: "localhost",
  // user: "node",
  // password: "node",
  // database: "master",
  // dateStrings: true
  host: "sql.freedb.tech",
  user: "freedb_nodeuser",
  password: "2vu32V59g3U8@*9",
  database: "freedb_mymaster",
  dateStrings: true

});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

module.exports = connection;