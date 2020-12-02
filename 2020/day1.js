document.body.innerText.split`\n`.flatMap(d=>d.replace(/(.+)-(.+) (.): (.+)/,(_,a,b,c,s)=>(o=s.split(c).length-1)<=b&&o>=a||[])||[]).length // p1
(_=document.body.innerText.split`\n`);_.flatMap(a => _.flatMap(b => _.flatMap(c => +a+ +b+ +c===2020?a*b*c:[]))) // p1
