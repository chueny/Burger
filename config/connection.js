// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com,	
  port: 3306,
  user: tso87gfnl5ba1rzi,
  password: ngnxd3v3h2nelwv0,
  database: dx24vnouh3fd5nn4
});

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
