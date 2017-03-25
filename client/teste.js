//  var chars = plaintext.ToList();
//     var chunks = (int)Math.Ceiling(((double)chars.Count() / (double)key));
//     var inters = new List<list>();
//     int i = 0, j = 0;

//     while (i = inters[l].Count())
//                 buff.Append("+");
//             else
//                 buff.Append(inters[l][k]);
//             l++;
//         }
//         k++;
//     }

//     return buff.ToString();

    // var key = 6;
    // var texto  = "Help me I am under attack".split('');
    // var cypher = []

    // for(int =0; i < cypher; )
    
    // var chunks = Math.ceil(texto.length/key);
    // var inters = [];
    // var i = 0;
    // var j = 0;
    // var l= 0;

    // while( i == inters[l])
    // console.log(chunks, '<==*');

var plainText = "help me i am under attack";

// var plainText = "helaadasdasdasdasdasdasdasd";
console.log(plainText);
var numOfRows = 5;

// if(numOfRows >= plainText.length || numOfRows <= 0){
//     return plainText;
// } else {
//     while(plainText.length%numOfRows != 0){
//         plainText +=" ";
//     }
// }

var encodedText = "";
var numOfCols = plainText.length/numOfRows;

for(var i =0; i<numOfCols; i++) {
    for(var y = i; y<plainText.length; y += numOfCols){
        encodedText += plainText.charAt(y);
    }
}

console.log(encodedText);

var decodedString = "";
var numOfCols = encodedText.length/numOfRows;

for(var i =0; i<numOfCols; i++) {
    for(var y = i; y<encodedText.length; y += numOfCols){
        decodedString += encodedText.charAt(y);
    }
}

console.log(decodedString);

