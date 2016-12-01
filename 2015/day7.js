a=require("fs")
    .readFileSync("7",'utf8')
    .replace(/(((.*) (.*)|NOT) )?(.*?) -> (.+)/g,
        function(m,a,b,c,d,e,f) {
            return f+"="+(b?(d?c+(d=='OR'?'|':d=='AND'?'&':d=='LSHIFT'?'<<':d=='RSHIFT'?'>>':d):'~'):'')+e
        }
    )
    .replace(/if/g,'_').replace(/do/g,'$').replace(/in/g,'ಠ')
    .split("\n")//.join(";\n")

// get start string
a.forEach(function(d,i){if(/^a=/.test(d))s=d})

// SOVE THIS JSUT BY USING A FILE


// _=s.match(/^a=(.*?)([a-z]{2})/)
// for(;_;) {
//     s=s.replace(_[2],f(_[2]))
//
//     console.log(s)
//     if(/undefined/.test(s)) {
//         console.log("error", _[2],f(_[2]))
//         break
//     }
//
//     _=s.match(/^a=(.*?)([a-z]{2})/)
// }



function asd(s) {
    _=s.match(/^a=(.*?)([a-z][a-z])/)
    if(_) {
        process.nextTick(function() {
            console.log(_[2])
            asd(s.replace(_[2],f(_[2])))
        });
    }
    else {
        console.log(s)
    }

}
asd(s)




function f(s) {
    for(i=0;i<a.length;i++) {
        x = a[i].match(new RegExp('^'+s+'=(.*)'));

        if(x&&x[1]) {
            return "("+x[1]+")"
        }
    }
    return "{}";
}

//eval(__)__.length
//console.log(__)

a.forEach(function(d,i){
    //console.log(d)
})
