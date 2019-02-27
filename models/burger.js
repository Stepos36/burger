var orm = require("../config/orm.js");
var burger = {
  all: function(callback) {
    orm.all("burgers", function(data) {
      callback(data);
    });
  },
  create: function(columns, values, callback) {
    orm.create("burgers", columns, values, function(data) {
      callback(data);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function(data) {
      callback(data);
    });
  },
  delete: function(condition, callback) {
    orm.delete("burgers", condition, function(data) {
      callback(data);
    });
  }
};
module.exports = burger;
