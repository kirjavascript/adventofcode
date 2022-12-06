n=document.body.textContent.split`\n\n`.map(d=>eval(d.trim().split`\n`.join`+`));t=_=>(q=Math.max(...n),n.splice(n.indexOf(q),1),q);eval([t(),t(),t()].join`+`)
