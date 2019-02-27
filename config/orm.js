var connection = require("../config/connection.js");

function printQuestionMarks(qty) {
  var qmarks = [];
  for (var i = 0; i < qty; i++) {
    qmarks.push("?");
  }
  return qmarks.toString();
}
function objToSql(object) {
    var arr = [];

  for (var key in object) {
    var value = object[key];
    if (Object.hasOwnProperty.call(object, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
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
  },
  update: function(table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }

      callback(data);
    });
  },
  delete: function(table, condition, callback) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }

      callback(data);
    });
  }
};

module.exports = orm;
