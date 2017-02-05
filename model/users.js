"use strict";

const db = require('../config/dbcon');

var users = {
	get: (options, cb) => {
		db.query(`
			select * from user;
			`, (err, result, fileds) => {
				cb(err, result);
		});
	},
};

module.exports = users;