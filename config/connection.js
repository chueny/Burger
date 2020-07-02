// Set up MySQL connection.
var mysql = require("mysql");

console.log("port", process.env.DATABASE_PORT);
console.log("username", process.env.USERNAME);
console.log("database", process.env.DATABASE);
console.log("host", process.env.HOST);
console.log("pwd", process.env.PASSWORD);

var connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.DATABASE_PORT,
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
