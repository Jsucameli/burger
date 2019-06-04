var mysql = require("mysql");
var connection;

if (process.env.) {
  connection = mysql.createConnection(process.env.);
}
else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
};

Make connection.connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
connection.connect();

module.exports = connection;
