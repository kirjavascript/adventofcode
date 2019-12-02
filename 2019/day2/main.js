input=require('fs').readFileSync('input.txt', 'utf8')
// for(d=input.split`,`,d[1]=12,d[2]=2,i=0;99!=d[i];i+=4)[o,a,b,t]=d.slice(i),d[t]=2-d[o]?d[a]-+-d[b]:d[a]*d[b];d[0]

// console.log(d[0])

// for(d=[],x=0;d[0]!=19690720&&0|x/100< 102;x++) {
//     for(d=input.split`,`,d[1]=0|x/100,d[2]=x%100,i=0;99!=d[i];i+=4)[o,a,b,t]=d.slice(i),d[t]=2==d[o]?d[a]*d[b]:+d[a]+ +d[b];


//     if (d[0] > 1000) {
//         console.log(0|x/100,x%100,d[0])
//     }


// }

for(x=0;100>x;x++) {
for(y=0;100>y;y++) {

    for(d=input.split`,`,d[1]=x,d[2]=y,i=0;99!=d[i];i+=4)[o,a,b,t]=d.slice(i),d[t]=2-d[o]?d[a]- -d[b]:d[a]*d[b];
    if (d[0]==19690720) {
        console.log(x, y)
    }
}
}
