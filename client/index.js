// CLIENT
var socket = require('socket.io-client')('http://localhost:3000');
var prompt = require('prompt');

prompt.start();

socket.on('connect', function(){
  prompt.get(['mensagem',], function (err, result) {
      var retorno = encode(result.mensagem, 3);
      console.log('original:', result.mensagem);
      console.log('encrypted:', retorno);
      socket.emit('event', { msg: retorno });
  });

  socket.on('eventBack', function(data){
     // console.log('output server =>', data.msg);
      var recode = encode(data.msg, 3);
      console.log('reEncrypted  => ', recode);
  })
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
