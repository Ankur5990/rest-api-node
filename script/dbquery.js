const pro = require('commander');
const con = require('../config/dbcon.js');

pro
  .version('0.0.1')
  .option('-u, --users', 'Insert dummy data in users table')
  .option('-n, --number <num>', 'Number of records to insert')
  .option('-c, --catagory','Insert data in to catagory table')
  .option('-p, --product','Insert data in to product table')
  .parse(process.argv);

 var howMany = +pro.number || 10;

 if (pro.users) {
 	insertInUsers();
 }
 else if(pro.catagory){
 	insertInCatagory();
 }
 else if(pro.product){
 	insertInProduct();
 }
  else {
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
 function insertInCatagory(){
 	var data = ['Men','Women','Kids','Electronics','FootWear','Leather','Watch','Undergarments'];
 	for(var i=0; i<data.length; i++){
 		var item = data[i];
 		var catalog ={
 			catagory_name:item,
 			};
 		con.query('insert into catagory set ?', catalog, (err,result,fields) => {
 			console.log(err, catalog);
 		});
 	}
 }
 function insertInProduct(){
 	for(var i=0; i< howMany; i++){
 		var prod = {
 			product_Name: 'p' + i,
 			description: 'This is product ' + i,
 			price: i + 5*i,
 			catagory_id: i,
 		};
 		con.query('insert into product set ?', prod, (err,result,fields) => {
 			console.log(err, prod);
 		});
 	}
 }