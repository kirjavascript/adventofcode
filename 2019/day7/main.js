input = `3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5`

// part 1 (eventually converges on the answer)

function runCode(n) {
    for (d = input.split`,`, i = 0; [o, a, b, t] = d.slice(i), 99 != o;

    ) {
        p = o % 10;

        if (p == 3) {
            d[a] = n.pop();
        }
        if (!((T=0|o/100)&1)) {
            a = d[a];
        }
        if (10>T) {
            b = d[b];
        }
        if (p == 4) {
            // n = +a;
            return +a;
        }
        i = p==5&a>0||p==6&!+a ? b : ++i+(0|(p-1)/2||3)
        ~'1278'.indexOf(p)?d[t]=[+(a==b),a-+-b,a*b,+(b>a)][p%4]:0
    }

}

// for(O=0;;) {
P = [9,8,7,6,5]
    // .sort(_=>Math.random()-.5);
//
//
    // o2=[4,3,2,1,0].sort(_=>Math.random()-.5).reduce((a, c) => runCode([a, c]), 0)
    // if (o2 > O) {
    //     console.log(O=o2)
    // }
// }
//21:49 <+nil> cake^: eh? each amplifier takes an initial phase setting, and then takes one input and produces one output and repeats
