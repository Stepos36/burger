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
};
module.exports = burger;
