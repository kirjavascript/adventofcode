B=(s,c='F')=>+('0b'+[...s].map(d=>+(d!=c)).join``);Math.max(...document.body.innerText.split`\n`.map(s=>s.replace(/(.{7})(.+)/,(_,a,b)=>B(a)*8+B(b,'L')))) // p1
B=(s,c='F')=>+('0b'+[...s].map(d=>+(d!=c)).join``);document.body.innerText.split`\n`.map(s=>s.replace(/(.{7})(.+)/,(_,a,b)=>B(a)*8+B(b,'L'))).sort((a,b)=>b-a).map(d=>{B-d!==1&&alert(B);B=d}) // p2
