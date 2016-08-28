var express = require('express');
var app = express();
var PORT = 3000;

//to run server in terminal just run like a normal node app

//to stop server from listening on port 3000 press control C

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', function(req,res){
	res.send('This is the about page!');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function(){
	console.log('Express server started running');
});