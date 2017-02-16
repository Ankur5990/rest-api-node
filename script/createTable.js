const tables = require('./tables');


var tablesName = Object.keys(tables);

for (var i = -1; ++i < tablesName;) {

	var table = tablesName[i];
	var tableName = table.tableName;

	var query = `
		create table `+ tableName+`()
	`;
}


create table user(
	id int unsigned not null auto_increment,
	fName varchar(32),
	lName varchar(32),
	email varchar(32),
	password varchar(32),
	created_at datetime,
	updated_at datetime,
	primary key(id)
);
create table catagory(
	catagory_id int unsigned not null auto_increment,
	catagory_name varchar(32),
	primary key(catagory_id)
	);
create table product(
	product_id int unsigned not null auto_increment,
	product_Name varchar(32),
	description varchar(32),
	price int,
	catagory_id int,
	primary key(product_id)
);