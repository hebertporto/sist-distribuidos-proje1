// SERVER 
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 3000;

io.on('connection', function(socket) {
  socket.on('event', function (data) {
    console.log('client =>' + data.msg + '|');

    var encodedText = data.msg; 
    var numOfRows = 5; //Math.ceil(encodedText.length/2);
    var decodedString = "";
    var numOfCols = 2;
    console.log('numOfCols', numOfCols);

    for(var i =0; i<numOfCols; i++) {
        for(var y = i; y<encodedText.length; y += numOfCols){
            decodedString += encodedText.charAt(y);
        }
    }

    socket.emit('eventBack', {msg: decodedString });
  });
});

server.listen(port, function() {
    console.log('Server listening at port ', port);
});
