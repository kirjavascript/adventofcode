input = require('fs')
    .readFileSync('input.txt', 'utf8')
    .trim();

// attempt #1

for (d = input.split`,`.map(d => +d), i = 0, n = 5; 99 != d[i]; ) {
    [o, a, b, t] = d.slice(i); // change to splice / recursion
    p = o % 100;

    if (p == 3) {
        d[a] = n;
    }
    if ((((0 | o / 100) & 1) == 0)) {
        a = d[a];
    }
    if ((((0 | o / 1e3) & 1) == 0)) {
        b = d[b];
    }
    i += (0|(p-1)/2||3) + 1; // change to o < 3


    if (p == 5) {
        if (a > 0) {
            i = b;
        }
    }

    if (p == 6) {
        if (!a) {
            i = b;
        }
    }
    if (p == 7) {
        d[t] = +(a < b)
    }
    if (p == 8) {
        d[t] = +(a==b)
    }

    if (p == 4) {
        n = +a;
    }
    if (p == 2) {
        d[t] = a * b;
    }
    if (p == 1) {
        d[t] = a - +-b;
    }
}

// attempt #2

for (d = input.split`,`, i = 0, n = 5; [o, a, b, t] = d.slice(i), 99 != o;

) {
    p = o % 10;

    if (p == 3) {
        d[a] = n;
    }
    if (!((T=0|o/100)&1)) {
        a = d[a];
    }
    if (10>T) {
        b = d[b];
    }
    if (p == 4) {
        n = +a;
    }
    i = p==5&a>0||p==6&!+a ? b : ++i+(0|(p-1)/2||3)
    ~'1278'.indexOf(p)?d[t]=[+(a==b),a-+-b,a*b,+(b>a)][p%4]:0
}

// attempt #3

for (d = input.split`,`, i = 0, n = 5; [o, a, b, t] = d.slice(i), 99 != o;
    p = o % 10,
    3==p&&(d[a]=n),1&(T=0|o/100)||(a=d[a]),10>T&&(b=d[b]),4==p&&(n=+a),
    i = p==5&a>0||p==6&!+a ? b : ++i+(0|(p-1)/2||3),
    ~'1278'.indexOf(p)?d[t]=[+(a==b),a-+-b,a*b,+(b>a)][p%4]:0
);n

// fin

for(d=input.split`,`,i=0,n=5;[o,a,b,t]=d.slice(i),99!=o;p=o%10,3==p&&(d[a]=n),1&(T=0|o/100)||(a=d[a]),10>T&&(b=d[b]),4==p&&(n=+a),i=5==p&a>0||6==p&!+a?b:++i+(0|(p-1)/2||3),~"1278".indexOf(p)?d[t]=[+(a==b),a-+-b,a*b,+(b>a)][p%4]:0);n
