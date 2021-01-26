console.log(typeof Number('0'), Number('0'));
console.log(typeof Number('-1'), Number('-1'));
console.log(typeof Number('10.53'), Number('10.53'));
console.log(typeof Number(true), Number(true));
console.log(typeof Number(false), Number(false));

console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseInt('-1'), parseInt('-1'));
console.log(typeof parseFloat('10.53'), parseFloat('10.53'));
console.log(typeof parseInt('10.53'), parseInt('10.53'));

console.log(typeof (+ '0'), (+ '0'));
console.log(typeof (+ '-1'), (+ '-1'));
console.log(typeof (+ '10.53'), (+ '10.53'));

console.log(typeof + true, + true);
console.log(typeof + false, + false);

console.log(typeof ('0' * 1), ('0' * 1));
console.log(typeof ('-1' * 1), ('-1' * 1));
console.log(typeof ('10.53' * 1), ('10.53' * 1));
console.log(typeof (true * 1), (true * 1));
console.log(typeof (false * 1), (false * 1));