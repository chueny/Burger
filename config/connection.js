// Set up MySQL connection.
var mysql = require("mysql");

console.log("process", process.env.PORT);
console.log("process", process.env.USERNAME);
console.log("process", process.env.DATABASE);
console.log("process", process.env.HOST);
console.log("process", process.env.PASSWORD);

var connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack, err.message);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
