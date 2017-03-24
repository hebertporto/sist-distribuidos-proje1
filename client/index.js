var socket = require('socket.io-client')('http://localhost:3000');
var prompt = require('prompt');

prompt.start();

socket.on('connect', function(){
  prompt.get(['mensagem',], function (err, result) {
      socket.emit('event', { msg: result.mensagem });
  });

  socket.on('eventBack', function(data){
    console.log('retornou do server ', data.msg);
  })
});
