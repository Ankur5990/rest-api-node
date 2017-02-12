"use strict";

var userModel = require('../model/users');

var users = {

	get: (req, res, next) => {
		var options = {};

		['id'].forEach((elem, index) => {
			if (req.query[elem]) {
				options[elem] = req.query[elem];
			}
		});

		['fName', 'lName', 'email'].forEach((elem, index) => {
			if (req.query[elem]) {
				options[elem] = req.query[elem];
			}
		});

		userModel.get(options, (err, data) => {
			if (!err){
				res.json(data);
			} else {
				next(err);
			}
		});
	},

	validate: (req, res, next) => {
		if (!req.body.email) {
			return next(new Error('Email is required'));
		}
		if (!req.body.password) {
			return next(new Error('Password is required'));
		}
		next();
	},

	login: (req, res, next) => {

		let options = {};

		['email', 'password'].forEach((elem, index) => {
			if (req.body[elem]) {
				options[elem] = req.body[elem];
			}
		});

		userModel.get(options, (err, data) => {
			if (!err){
				if (data[0] && data[0].password == req.body.password) {
					res.json(data);
				} else {
					res.status(500).json({error: 'Wrong password'});
				}
			} else {
				next(err);
			}
		});
	},
};

module.exports = users;