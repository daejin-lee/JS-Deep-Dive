var done = false;
var message = '';

if (!done) message = '미완료';
console.log(message);

message = '';
message = done || '미완료';
console.log(message);