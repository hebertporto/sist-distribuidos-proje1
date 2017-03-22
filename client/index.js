var socket = require('socket.io-client')('http://localhost:3000');
var prompt = require('prompt');

// prompt.start();
//
// prompt.get(['mensagem',], function (err, result) {
//     console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
//   });

socket.on('connect', function(){
  console.log('conectou no server');
  // socket.on('event', function(data){});
  socket.emit('event', { msg: 'vindo do client' });
});
// socket.on('disconnect', function(){});
