// SERVER 
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 3000;

io.on('connection', function(socket) {
  socket.on('event', function (data) {
    console.log('IN =>' + data.msg);

   var decodedString =  decode(data.msg, 3);
    console.log('OUT =>', decodedString);
    socket.emit('eventBack', {msg: decodedString });
  });
});

server.listen(port, function() {
    console.log('Server listening at port ', port);
});

function encode(text, key){
    var plainText = text;
    var numOfRows = key;
    var encodedText = "";
    var numOfCols = Math.ceil(plainText.length/numOfRows);

    for(var i =0; i<numOfCols; i++) {
        for(var y = i; y<plainText.length; y += numOfCols){
            encodedText += plainText.charAt(y);
        }
    }
    return encodedText;
}

function decode(text, key){
    
    var numOfCols = Math.ceil(text.length/key);
    var result = encode(text, numOfCols);
    return result;
}