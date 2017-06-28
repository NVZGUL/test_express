var express = require('express');
var app = express()
var port = process.env.PORT || 3000

app.get('/', function(req,res){
	res.send('Hello world32')
});

var server = app.listen(port, function(req,res){
	console.log("server runnin on http://localhost:"+port);
})