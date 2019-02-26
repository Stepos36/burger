var orm = require('../config/orm.js')
var burger = {
    select: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res)
        })
    },
    insert: function(burger, cb) {
		orm.insertOne('burgers', burger, function(res) {
			cb(res);
		});
	},
	update: function(burger, cb) {
		orm.updateOne('burgers', burger, function(res) {
			cb(res);
		});
	}
}

module.exports = burger