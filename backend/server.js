var express = require('express');
var bodyParser = require('body-parser');

 var mysql = require("mysql");

 var config = {
     mysql: {
         host: "localhost",
         waitForConnections: false,
         user: "root",
         password: "Ree",
         database: "posts"
     }
 };

 var pool = mysql.createPool(config.mysql);

 var poolConnectionWrapper = function (cb) {
 	pool.getConnection((error, connection) => {
 		cb(error, connection, () => {
 			if (pool._freeConnections.indexOf(connection) === -1) {
 				connection.release();
 			}
 		});
 	});
 };

var constructKey = function (length, keyChars = "0123456789abcdef") {

    var key = "";
    for (var i = 0; i < length; i++)
        key += keyChars[Math.floor(Math.random()*keyChars.length)];
	return key;
	
}
var app = express();


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/login', (req, res) => {
    	if (req.body.user && req.body.pass) {
    		res.status(200).send(constructKey(30));
	} else {
		res.status(400).send("Malformed parameters!");
	}
});

app.post("/posts", (req, res) => {
	console.log(req.body);
	if (req.body.user && req.body.title && req.body.contents) {
		poolConnectionWrapper((err, connection, cb) => {
			if (err) {
				res.status(500).send("Tietokanta ei toiminnallinen!");
				console.log(err);
			} else {
				var query = "INSERT INTO posts (userID, title, content) VALUES (" + connection.escape(req.body.user) +
				", " + connection.escape(req.body.title) + ", " + connection.escape(req.body.contents) + ");";
				connection.query(query, (err, results) => {
					if (err) {
						res.status(500).send("Tietokanta ei toiminnallinen!");
						return;
					}
					res.status(200).send("success!");
				});
			}
			cb();
		});
	} else {
		res.status(400).send("Malformed request, check all the parameters.");
	}
});

app.get("/posts", (req, res) => {
	if (req.query.user) {
		poolConnectionWrapper((err, connection, cb) => {
			if (err) {
				res.status(500).send("Tietokanta ei toiminnallinen!");
				console.log(err);
			} else {
				var query = "SELECT content, title FROM posts WHERE userID = " + connection.escape(req.query.user) + ";"
				connection.query(query, (err, results) => {
					if (err) {
						res.status(500).send("Tietokanta ei toiminnallinen!");
						console.log(err);
						return;
					}
					res.status(200).send(results);
				});
			}
			cb();
		});
	} else {
		res.status(400).send("Malformed request, check all the parameters.");
	}
});


var port = 3031;
app.listen(port);
console.log("Listening: " + port);

