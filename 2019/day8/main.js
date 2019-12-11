input = require('fs')
    .readFileSync('input.txt', 'utf8')
    .trim();

// part 1

// q=(n,o)=>0 in(n=[...n])?[n.splice(0,o),...q(n,o)]:n

// o = q(q(input, 25), 6).map(d=>''+d)

// g=(s,q)=>s.match(q).length

// i = o.reduce(([s, I], c, i) => {
//     b = g(c,/0/g);
//     if (b < s) {
//         return [b, i]
//     }
//     return [s, I];
// }, [1/0, -1])

// o = o[i[1]]

// console.log(g(o,/1/g) * g(o,/2/g))

q=((o,g)=>0 in(o=[...o])?[o.splice(0,g),...q(o,g)]:o),o=q(q(input,25),6).map(o=>""+o),g=((o,g)=>o.match(g).length),i=o.reduce(([o,n],i,c)=>(b=g(i,/0/g),o>b?[b,c]:[o,n]),[1/0,-1]),o=o[i[1]],g(o,/1/g)*g(o,/2/g)

// part 2

// q=(n,o)=>0 in(n=[...n])?[n.splice(0,o),...q(n,o)]:n

// L = q(q(input, 25), 6).map(d=>(''+d).split`,`)

// O = L[0].map((d, i) => {
//     for(I=1;d>1;) {
//         d = L[I++][i]
//     }
//     return d;
// })

// console.log(q(O, 25).map(d => d.map(d => d=='1'?'X':' ').join``).join`\n`)

// q=(n,o)=>0 in(n=[...n])?[n.splice(0,o),...q(n,o)]:n;
// L = q(q(input, 25), 6).map(d=>(''+d).split`,`);
// q(L[0].map((d,i)=>eval(`for(I=1;d>1;d=L[I++][i]);d`)), 25).join`\n`

q=((i,n)=>0 in(i=[...i])?[i.splice(0,n),...q(i,n)]:i),L=q(q(input,25),6).map(i=>(""+i).split`,`),q(L[0].map((d,i)=>eval(`for(I=1;d>1;d=L[I++][i]);d`)),25).join`\n`
