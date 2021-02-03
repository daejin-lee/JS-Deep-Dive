function factorial(n) {
    if (n <= 1) return 1;

    var res = n;
    while (--n) res *= n;
    return res;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));