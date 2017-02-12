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
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	primary key(id)
);