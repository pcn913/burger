// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;



var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'ucex1k9e7vdrjldv',
		password: 'hno60sn9x0ul59l1',
		database: 'j1kfwgbgbogy19pj'
	});
};

connection.connect();
module.exports = connection;
