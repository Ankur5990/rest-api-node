"use strict";

var productModel = require('../model/product.js');

var product = {
	get: (req,res,next) =>{
		var options = {}
		['product_id','price','catagory_id'].forEach((elem,index) =>{
			if(req.query[elem]){
				options[elem] = req.query[elem];
			}
		});
		['product_name','description'].forEach((elem,index) =>{
			if(req.query[elem]){
				options[elem] = req.query[elem];
			}
		});

		productModel.get(options,(err,data) =>{
			if(!err) {
				res.json(data);
			}
			else {
				next(err);
			}
		})
	},
};
module.exports = product;