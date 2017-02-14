const pro = require('commander');
const con = require('../config/dbcon.js');

pro
  .version('0.0.1')
  .option('-u, --users', 'Insert dummy data in users table')
  .option('-n, --number <num>', 'Number of records to insert')
  .parse(process.argv);

 var howMany = +pro.number || 100;

 if (pro.users) {
 	insertInUsers();
 } else {
 	console.log('Plz type -h OR --help to get help of options and to choose the command')
 }

 function insertInUsers() {
 	
 	var count = 0;
 	for (var i = -1; ++i < howMany;) {
 		var fname = (i%2) ? 'Intekhab '+i : 'Ankur '+i;
 		var lname = (i%2) ? 'alam' : 'Tripathi';
 		var email = (i%2) ? 'Intekhab'+i+ '@gmail.com' : 'Ankur'+i+ '@gmail.com';
 		var user = { 
 			fName: fname,
 			lName: lname,
 			email: email,
 			password: '12345',
 			created_at: '2014-11-22 12:45:34',//'NOW()',
 			updated_at: '2014-11-22 12:45:34',//'NOW()'
 		};
 		con.query('insert into user set ?', user, (err, result, fields) => {
 			console.log(err, count);
 			count++;
 			if (count === howMany) process.exit(0);
 		});

 	}
 }