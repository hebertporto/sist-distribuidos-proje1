var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 3000;

io.on('connection', function(socket) {
  socket.on('event', function (data) {
      console.log('recebeu mensagem do socket ' + data.msg);
  });
});

server.listen(port, function() {
    console.log('Server listening at port ', port);
});
