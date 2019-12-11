input = require('fs')
    .readFileSync('input.txt', 'utf8')
    .trim();

// part 1

q=(n,o)=>0 in(n=[...n])?[n.splice(0,o),...q(n,o)]:n

o = q(q(input, 25), 6);

o = o.map(d=>''+d)

i = o.reduce(([s, I], c, i) => {
    b = c.match(/0/g).length;
    if (b < s) {
        return [b, i]
    }
    return [s, I];
}, [1/0, -1])

o = o[i[1]]

console.log(o.match(/1/g).length * o.match(/2/g).length)
