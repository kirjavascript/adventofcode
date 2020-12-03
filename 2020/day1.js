(b=document.body.innerText.split`\n`).flatMap(v => b.includes([]+(a=2020-v))?[v*a]:[]) // p1
(_=document.body.innerText.split`\n`).flatMap(a => _.flatMap(b => _.flatMap(c => +a+ +b+ +c===2020?a*b*c:[]))) // p1
