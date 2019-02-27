var mysql = require("mysql")
    PORT = process.env.PORT || 8080;
    connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
}
handleDisconnect()
console.log("connected as id " + connection.threadId);

module.exports = connection

function handleDisconnect() {
  connection.connect(function(err) {
    if(err) {
      console.error("error connecting: " + err);
      setTimeout(handleDisconnect, 2000);
      }
  });
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
