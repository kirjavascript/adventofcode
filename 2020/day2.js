document.body.innerText.split`\n`.flatMap(d=>d.replace(/(.+)-(.+) (.): (.+)/,(_,a,b,c,s)=>(o=s.split(c).length-1)<=b&&o>=a||[])||[]).length // p1
document.body.innerText.split`\n`.flatMap(d=>d.replace(/(.+)-(.+) (.): (.+)/,(_,a,b,c,s)=>(a=s[a-1],b=s[b-1],(a==c||b==c)&&a!=b||[]))||[]).length // p2
