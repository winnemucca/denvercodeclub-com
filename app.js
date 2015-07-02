var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var apiRoutes = require('./server/routes/api');
var routes = require('./server/routes/index');



app.get('/',function(req, res) {
	res.json({
        name: 'Rick James',
        instrument: 'mouth'
    });
});


var server = app.listen(8080,function() {
	console.log('Express server listening on port ', server.address().port);
})