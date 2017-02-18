'use strict'

const db = require('../config/dbcon');

var product = {
	get: (options,cb) => {
		var query = ` select * from product where 1=1 `;
		var filters = [];
		['product_id','product_price','catalog_id'].forEach((elem, index) =>{
			if(options[elem]){
				query += 'and' + elem + `= ?`;
				filters.push(+options[elem]);
			}
		});
		['product_name','description'].forEach((elem, index) => {
			if(options[elem]){
				query += 'and' + elem + `=?`;
				filters.push(options[elem]);
			}
		});
		db.query(query,filters,(err,result,fields) =>{
			cb(err, result);
		});
	},
};

module.exports = product;