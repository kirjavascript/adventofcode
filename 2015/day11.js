p="cqjxjnds"


while(!/(abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/.test(p)|/[ilo]/.test(p)|!/(.)\1.*(.)\2/.test(p)){
    p=p.split("")
    for(i=p.length-1;i>=0;) {

        if(i==0&&p[i]=="z"){p=Array(p.length+2).join("a").split("");break}
        if(p[i]=="z")p[i]="a";
        else{p[i] = String.fromCharCode(p[i--].charCodeAt(0)+1);break}
    }
    p = p.join("")
}

console.log(p)
