foo: {
    console.log(1);
    break foo;
    console.log(2);
}
console.log('Done!');