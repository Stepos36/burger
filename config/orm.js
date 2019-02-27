var connection = require("../config/connection.js");

function printQuestionMarks(qty) {
  var qmarks = [];
  for (var i = 0; i < qty; i++) {
    qmarks.push("?");
  }
  return qmarks.toString();
}

var orm = {
  all: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }
      callback(data);
    });
  },
  create: function(table, columns, values, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(values.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, values, function(err, data) {
      if (err) {
        throw err;
      }
      callback(data);
    });
  }
};

module.exports = orm;
