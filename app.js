var express = require('express');
var bodyParser = require('body-parser');

var app = express();



app.get('/',function(req, res) {
	res.json({
        name: 'Kim Gordon',
        instrument: 'Bass'
    });
});


var server = app.listen(8080,function() {
	console.log('Express server listening on port ', server.address().port);
})