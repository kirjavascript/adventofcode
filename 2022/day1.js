Math.max(...document.body.textContent.split`\n\n`.map(d=>eval(d.trim().split(`\n`).join(`+`))))
