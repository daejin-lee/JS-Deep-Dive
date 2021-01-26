var string = 'Hello World.';
var search = 'l';
var index;

for (var i = 0; i < string.length; i++){
    if (string[i] === search) { 
        index = i;
        break;
    }
}
console.log(index);