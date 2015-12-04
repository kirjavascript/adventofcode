q=0;require("fs").readFileSync("2",'utf8').split("\n").forEach(e=>{e=e.split("x").sort((a,b)=>a-b)=[3*e[0]*e[1],2*e[1]*e[2],2*e[2]*e[0]];q+=parseInt(e.reduce((a,b)=>a+b))});console.log(q)
