input = `3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0`

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

for(O=0;;) {
    o2=[4,3,2,1,0].sort(_=>Math.random()-.5).reduce((a, c) => runCode([a, c]), 0)
    if (o2 > O) {
        console.log(O=o2)
    }
}
