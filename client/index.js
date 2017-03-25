// CLIENT
var socket = require('socket.io-client')('http://localhost:3000');
var prompt = require('prompt');

prompt.start();

socket.on('connect', function(){
  prompt.get(['mensagem',], function (err, result) {
      var result = encode(result.mensagem);
      console.log('=>', result + '|');
      socket.emit('event', { msg: result });
  });

  socket.on('eventBack', function(data){
      console.log('output server =>', data.msg);
      
     // console.log('mensagem decodificada ', decodedText);
  })
});

function encode(textToencode){
      
      var plainText = textToencode;
      var numOfRows =  5;//Math.ceil(textToencode.length/4);
      var encodedText = "";
      var numOfCols = 2;
      console.log('lenght', textToencode.length);
      console.log('Cols', numOfCols);

      for(var i =0; i<numOfCols; i++) {
          for(var y = i; y < plainText.length; y += numOfCols){
              encodedText += plainText.charAt(y);
          }
      }

      var decodedString = "";
      var numOfCols = encodedText.length/numOfRows;

      for(var i =0; i<numOfCols; i++) {
          for(var y = i; y<encodedText.length; y += numOfCols){
              decodedString += encodedText.charAt(y);
          }
      }
      console.log('decoded', decodedString);
      return encodedText;
}