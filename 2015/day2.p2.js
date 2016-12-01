var q = 0

require("fs")
    .readFileSync("2",'utf8')
    .split("\n")
    .forEach(function(e) {
        e=e.split("x");
        f=e;
        e=[
            (2*e[0])+(2*e[1]),
            (2*e[1])+(2*e[2]),
            (2*e[2])+(2*e[0]),
        ]
        q+=parseInt(Math.min.apply(null,e));
        q+=f[0]*f[1]*f[2];
    })

console.log(q)
