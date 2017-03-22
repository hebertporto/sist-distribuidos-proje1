var socket = require('socket.io-client')('http://localhost:3000');
var prompt = require('prompt');

prompt.start();

socket.on('connect', function(){
  prompt.get(['mensagem',], function (err, result) {
      socket.emit('event', { msg: result.mensagem });
  });
});
