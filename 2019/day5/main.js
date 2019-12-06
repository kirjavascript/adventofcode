input = require('fs')
    .readFileSync('input.txt', 'utf8')
    .trim();

for (d = input.split`,`.map(d => +d), i = 0, n = 5; 99 != d[i]; ) {
    [o, a, b, t] = d.slice(i); // change to splice / recursion
    p = o % 100;
    size =(0|(p-1)/2||3) + 1

    console.log(i, [o, a, b, t], size, 4 - 2 * (p > 2), [
        ((0|o / 100) & 1) == 0,
        ((0|o / 1e3) & 1) == 0,
    ]);
    if (p == 3) {
        d[a] = n;
    }
    if ((((0 | o / 100) & 1) == 0)) {
        a = d[a];
    }
    if ((((0 | o / 1e3) & 1) == 0)) {
        b = d[b];
    }
    i += size; // change to o < 3
    if (i > 200) {
        // break;
    }

    if (p == 5) {
        if (a > 0) {
            i = b;
        }
    }

    if (p == 6) {
        if (a == 0) {
            i = b;
        }
    }
    if (p == 7) {
        d[t] = +(a < b)
    }
    if (p == 8) {
        d[t] = +(a==b)
    }

    if (p == 4) {
            console.log(+a)
        if (+a !== 0) {
            // break;
        }
        n = +a;
    }
    if (p == 2) {
        d[t] = a * b;
    }
    if (p == 1) {
        d[t] = a - +-b;
    }
}
console.log(n);
