// browser
(d=document.body.textContent.split`\n`).reduce((t,x)=>t+=(x/3|0)-2,0)
eval(d.map(f=>eval(`for(t=0;f=(0|f/3)-2,f>0;)t+=f`)).join`+`)
// nibblr
eval(store.get``.split`\n`.map(f=>eval(`for(t=0;f=(0|f/3)-2,f>0;)t+=f`)).join`+`)
eval(store.get``.replace(/\d+\n/g,f=>'+'+eval(`for(t=0;f=0|f/3,f>2;)t+=f-2`)))
