// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL);

// var connection = mysql.createConnection({
//   host: process.env.HOST,
//   port: process.env.PORT,
//   user: c2hpo9z99mw8e3ix,
//   password: c9qzlfej9088vie9,
//   database: process.env.DATABASE
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
