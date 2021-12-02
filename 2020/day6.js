eval(document.body.innerText.split`\n\n`.map(d=>new Set(['\n',...d]).size-1).join`+`)+1 // p1
document.body.innerText.trim().split`\n\n`.reduce((a,d)=>a+([h,...t]=d.split`\n`,[...h].filter(d=>t.every(D=>D.includes(d)))).length,0)
