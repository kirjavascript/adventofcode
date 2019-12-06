input = require('fs')
    .readFileSync('input.txt', 'utf8')
    .trim();

// part 1

// Q=[...input.matchAll(/(.+)\)(.+)/mg)]
// o=0;
// for([,a,b] of Q) {
//     for(o+=1;a!='COM';o++) {
//         b = a;
//         a = Q.find(d => d[2] == b)[1]
//     }
// }

// for([,a,b]of(Q=[...input.matchAll(/(.+)\)(.+)/gm)],o=0,Q))for(o+=1;"COM"!=a;o++)b=a,a=Q.find(o=>o[2]==b)[1];o

// part 2

// Q=[...input.matchAll(/(.+)\)(.+)/mg)]
// G=a=>{
//     Y=Q.find(d=>a.test(d[2]))
//     for(o=[];[z,a,b]=Y,a!='COM';o.unshift(z)) {
//         Y = Q.find(d => d[2] == a)
//     }
//     return o;
// }
// console.log(G(/YOU/).filter((d,i)=>d!=G(/SAN/)[i]).length-1)
// console.log(G(/SAN/).filter((d,i)=>d!=G(/YOU/)[i]).length-1)

// Q=[...input.matchAll(/(.+)\)(.+)/mg)]
// G=a=>{
//     Y=Q.find(d=>(+a?/SAN/:/YOU/).test(d[2]))
//     for(o=[];[z,a,b]=Y,a!='COM';o.unshift(z)) {
//         Y = Q.find(d => d[2] == a)
//     }
//     return o;
// }
// eval(['01','10'].map(s=>G(s[0]).filter((d,i)=>d!=G(s[1])[i]).length-1).join`+`)

// Q=[...input.matchAll(/(.+)\)(.+)/gm)],G=(n=>{for(Y=Q.find(t=>(+n?/SAN/:/YOU/).test(t[2])),o=[];[z,n,b]=Y,"COM"!=n;o.unshift(z))Y=Q.find(t=>t[2]==n);return o}),eval(["01","10"].map(n=>G(n[0]).filter((t,o)=>t!=G(n[1])[o]).length-1).join`+`)
//

// Q=[...input.matchAll(/(.+)\)(.+)/mg)]
// G=a=>{
//     Y=Q.find(d=>a.test(d[2]))

//     for(o=[];[z,a,b]=Y,a!='COM';o.unshift(z)) {
//         Y = Q.find(d => d[2] == a)
//     }

//     return o;
// }
// A=(G(/YOU/))
// B=(G(/SAN/))
// A.find((d, i) => (I=i,B[i]!==d))
// console.log(A.length+B.length-I-I-2)

// Q=[...input.matchAll(/(.+)\)(.+)/gm)],G=(n=>{for(Y=Q.find(o=>n.test(o[2])),o=[];[z,n,b]=Y,"COM"!=n;o.unshift(z))Y=Q.find(o=>o[2]==n);return o}),A=G(/YOU/),B=G(/SAN/),A.find((n,o)=>(I=o,B[o]!==n)),(A.length+B.length-I-I-2)


// Q=[...input.matchAll(/(.+)\)(.+)/mg)]
// G=n=>eval(`for(o=[Y=Q.find(o=>n.test(o[2]))];[z,n,b]=Y,"COM"!=n;Y=Q.find(o=>o[2]==n),o.unshift(z))o`)
// A=(G(/YOU/))
// B=(G(/SAN/))
// A.find((d, i) => (I=i,B[i]!==d))
// console.log(A.length+B.length-I-I-4)

Q=[...input.matchAll(/(.+)\)(.+)/gm)],G=(n=>eval('for(o=[Y=Q.find(o=>n.test(o[2]))];[z,n,b]=Y,"COM"!=n;Y=Q.find(o=>o[2]==n),o.unshift(z))o')),A=G(/YOU/),B=G(/SAN/),A.find((n,o)=>(I=o,B[o]!==n)),(A.length+B.length-I-I-4)
