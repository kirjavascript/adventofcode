input=require('fs').readFileSync('./input.txt','utf8').trim();
q=eval(input.split('\n').map(f=>eval(`for(t=0,f=+f;f=(0|f/3)-2,f>0;)t+=f`)).join`+`)
console.log(q)
