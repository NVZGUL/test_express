var app = require('../server/server');

var port = process.env.PORT || 3000
var server = app.listen(port, function(req,res){
	console.log("server runnin on http://localhost:"+port);
})