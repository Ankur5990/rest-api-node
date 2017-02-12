const tables = {
	'user': {
		'tableName': 'user',
		'fields': ['id', 'fName', 'lName', 'email', 'password', 'created_at', 'updated_at'],
		'meta': [
			'unsigned not null primaty key', 
			'varchar (32)', 
			'varchar (32)', 
			'varchar (64)', 
			'varchar (64)',
			'TIMESTAMP',
			'TIMESTAMP',
		]
	},
}

exports.module = tables;