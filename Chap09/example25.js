function getStringLength(str){
    str = str || '';
    return str.length;
}

console.log("getStringLength(): ", getStringLength());
console.log("getStringLength('hi'): ", getStringLength('hi'));

function getStringLength(str = ''){
    return str.length;
}

console.log("getStringLength(): ", getStringLength());
console.log("getStringLength('hi'): ", getStringLength('hi'));