f = require("fs").readFileSync("5",'utf8').split("\n")

// p1

for(i=0;i<f.length;i++)x=f[i].match(/[aeiou]/g),((x?x.length:0)<3
|!/(.)\1/.test(f[i])|/(ab|cd|pq|xy)/.test(f[i]))&&f.splice(i--,1)

// p2

for(i=-1;f[++i]!=null;)!(/(..).*?\1/.test(f[i])&/(.).\1/.test(f[i]))&&f.splice(i--,1)

console.log(i)
