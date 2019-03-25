// Connect to MySQL
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection(process.env.JAWSDB_URL);

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: process.env.BURGERS_HOST,
//     port: 3306,
//     user: process.env.BURGERS_USER,
//     password: process.env.BURGERS_PASSWORD,
//     database: 'burgers_db'
//   });
// };


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;