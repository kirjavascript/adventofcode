input=require('fs').readFileSync('input.txt', 'utf8').trim()
for(d=input.split`,`,d[1]=12,d[2]=2,i=0;99!=d[i];i+=4)[o,a,b,t]=d.slice(i),d[t]=2==o?d[a]*d[b]:d[a]-+-d[b];d[0]
console.log(d[0])
for(x=d=[];d[0]!=19690720;x++)for(d=input.split`,`,i=0,d[1]=0|x/100,d[2]=x%100;[o,a,b,t]=d.slice(i),99!=d[i];i+=4)d[t]=2-o?d[a]-+-d[b]:d[a]*d[b];x-1
console.log(x-1);
