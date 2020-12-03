for(b=document.body.innerText.split`\n`,x=y=t=0;323>y;x=(x+3)%31,y++)"#"==b[y][x]&&++t // p1

// part 2

// v1
eval([[1,1],[3,1],[5,1],[7,1],[1,2]].map(([A,B])=>{for(b=document.body.innerText.split`\n`,x=y=t=0;323>y;x=(x+A)%31,y+=B)"#"==b[y][x]&&++t;return t}).join`*`)

// v2
b=document.body.innerText.split`\n`;eval([[1,1],[3,1],[5,1],[7,1],[1,2]].map(([A,B])=>eval(`for(x=y=t=0;323>y;x=(x+A)%31,y+=B)"#"==b[y][x]?++t:t`)).join`*`)

// v3
for(f=1,b=document.body.innerText.split`\n`,i=5;i--;){for(x=y=t=0;323>y;x=(x+(2*i+1)%8)%31,y+=0|(i+6)/5)"#"==b[y][x]&&++t;f*=t}f

// v4
for(f=1,b=document.body.innerText.split`\n`,i=5;i--;f*=t)for(x=y=t=0;323>y;x=(x+(2*i+1)%8)%31,y+=0|i/4+1)"#"==b[y][x]&&++t;f
