var express = require('express');
var app = express()

app.get('/', function(req,res){
	res.send('Hello world32')
});

var server = app.listen(3000, function(req,res){
	console.log("server runnin on http://localhost:"+server.address().port);
})