a=JSON.parse(require("fs").readFileSync("12",'utf8'))

var t = 0;

Object.values = function(obj) {
    return Object.keys(obj).map(function(e) {
        return obj[e]
    });
}

function rec(obj)
{
    for (k in obj)
    {
        if (Array.isArray(obj[k])) {
            console.log(obj[k])
                rec(obj[k]);
        }
        else if ((typeof obj[k] == "object") && Object.values(obj[k]).indexOf("red")==-1) {
            rec(obj[k]);
        }

        else if(typeof obj[k] != "object"){

            x = parseInt(obj[k]);

            if(x===x) {
                t += obj[k]
            }
        }
    }
}

rec(a)

console.log(t);
