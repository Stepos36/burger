var connection = require("./connection.js")
var tableName = "burgers";
var orm = {
    selectAll: function(callback) {
        var query = "SELECT * from " + tableName;
        connection.query(query, function(err, data) {
            if(err) {
                console.error("Error while processing your query: " + err);
                }
            else {
                callback(data)
            } 
        })
    },

    insertOne: function(burger, callback) {
        var query = "INSERT INTO TABLE " + tableName + "(burger_name, devoured) VALUES (?,?)";
        connection.query(query, [burger.name, false] function(err,data) {
            if(err) {
                console.error("Error while processing your query: " + err);
                }
            else {
                callback(data)
            }  
        })
    },

    updateOne: function(burger, callback) {
        var query = "UPDATE "+tableName+" SET ? WHERE id=?";
        connection.query(query, [devoured:true, burger.id], function(err,data) {
            if(err) {
                console.error("Error while processing your query: " + err);
                }
            else {
                callback(data)
            }  
        }
    }
}

module.exports = orm;