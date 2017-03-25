var plainText = "hel";
var numOfRows = 2;

if (numOfRows >= plainText.length || numOfRows <= 0)
{   
    console.log('retornou normal');
    return plainText;
} 
else 
{
    console.log(plainText.length % numOfRows, 'ops');
    while( (plainText.length % numOfRows) !== 0)
    {
        plainText +=" ";
    }
}

console.log(plainText.length);