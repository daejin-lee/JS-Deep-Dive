console.log(typeof String(1), String(1));
console.log(typeof String(NaN), String(NaN));
console.log(typeof String(Infinity), String(Infinity));
console.log(typeof String(true), String(true));
console.log(typeof String(false), String(false));

console.log(typeof (1).toString(), (1).toString());
console.log(typeof (NaN).toString(), (NaN).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

console.log(typeof (true).toString(), (true).toString());
console.log(typeof (false).toString(), (false).toString());

console.log(typeof (1 + ''), (1 + ''));
console.log(typeof (NaN + ''), (NaN + ''));
console.log(typeof (Infinity + ''), (Infinity + ''));
console.log(typeof (true + ''), (true + ''));
console.log(typeof (false + ''), (false + ''));