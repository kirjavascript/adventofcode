var q = 0

var i = require("fs")
    .readFileSync("3",'utf8')
    .split("")
    i.pop()

var hits = ["0,0"];
var x = 0;
var y = 0;
var rx = 0;
var ry = 0;
var bool = false;

i.forEach(function(n) {
    bool = !bool;
    n=="^"? (bool? x-- : rx--)  :
    n=="v"? (bool? x++ : rx++) :
    n=="<"? (bool? y-- : ry--) :
            (bool? y++ : ry++) ;

    bool? hits.push([x,y].toString())
        : hits.push([rx,ry].toString())
})

hits = hits.filter(function(e,i,s) {return s.indexOf(e) === i});

console.log(hits.length);
