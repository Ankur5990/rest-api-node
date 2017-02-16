'use strict'

const db = require('../config/dbcon.js');

var product = {
	get: (options,cb) =>{
		var filter = [];
		var query = `select * from product where 1=1`;
		['product_id','price','catagory_id'].forEach((elem,index) =>{
			if(req.query[elem]){
				query += `and` + elem + `=?`;
				filter.push(+options[elem]);
			}
		});
		['product_name','description'].forEach((elem,index) =>{
			if(req.query[elem]){
				query += `and` + elem + `=?`;
				filter.push(+options[elem]);
			}
		});
		db.query(query, filters, (err, result, fileds) => {
				cb(err, result);
		});
	}
};

module.exports = product;