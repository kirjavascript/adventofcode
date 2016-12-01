var q = 0

require("fs")
    .readFileSync("2",'utf8')
    .split("\n")
    .forEach(function(e) {
        e=e
            .split("x")
            .sort(function(a,b){return(a-b));
                
        e=[
            3*e[0]*e[1],
            2*e[1]*e[2],
            2*e[2]*e[0]
        ];
        q+=e.reduce(function(a,b){return a+b});
    })

console.log(q)
