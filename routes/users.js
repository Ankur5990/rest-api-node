"use strict";

var userModel = require('../model/users');

var users = {
	get: (req, res, next) => {
		userModel.get({}, (err, data) => {
			if (!err){
				res.json(data);
			} else {
				next(err);
			}
		});
	},
};

module.exports = users;