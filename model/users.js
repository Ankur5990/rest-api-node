"use strict";

const db = require('../config/dbcon');
const limit = 30;

var users = {
	get: (options, cb) => {
		var query = ` select * from user where 1=1 `;
		var filters = [];
		['id'].forEach((elem, index) => {
			if (options[elem]) {
				query += 'and ' +elem+ `= ? `;
				filters.push(+options[elem]);
			}
		});

		['fName', 'lName', 'email'].forEach((elem, index) => {
			if (options[elem]) {
				query += 'and ' +elem+ `= ? `;
				filters.push(options[elem]);
			}
		});
		query += ` limit ? `;
		filters.push(limit);
		console.log(query, filters, '*****');

		db.query(query, filters, (err, result, fileds) => {
				cb(err, result);
		});
	},
};

module.exports = users;