var mysql = require('mysql');
var express = require('express');

var app = express();

var client = mysql.createConnection( {
  user : 'root',
  password : 'dlckswn123'
});

app.use('/student', function(req, res) {
  client.query('USE Company');
  client.query('SELECT * FROM products', function(error, result, fields) {
    if(error) {
      console.log("there's problem in query sentences.");
    } else {
      res.json(result);
    }
  });
}).listen(7579, function() {
  console.log("Server is running on 13.59.174.162:7579");
});
