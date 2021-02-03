function repeat1(n) {
    for(var i = 0; i < n; i++) console.log(i);
}

repeat1(5);

function repeat2(n) {
    for(var i = 0; i < n; i++) {
        if (i % 2) console.log(i);
    }
}

repeat2(5);