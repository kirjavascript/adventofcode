// cheat at AOC by pasting these into your browser console on the input page

// d1 p1

eval($('pre').innerText.trim().split`\n`.map(d=>(q=d.replace(/[^\d]/g,''),q[0]+q.at(-1))).join`+`)

// d1 p2

n=`_|one|two|three|four|five|six|seven|eight|nine`,a=0,$('pre').innerText.trim().split`\n`.map(t=>(s=[...t].map((a,i)=>(q=n.split`|`.indexOf(t.match(RegExp(`^.{${i}}(${n})`))?.[1]),~q?q:1/a?a:[])).join``,a+=+(s[0]+s.at(-1)))),a

// d2 p1

$('pre').innerText.trim().split`\n`.reduce((A,d,i)=>A+=d.replace(/.+:/,[]).split(';').every((d)=>!d.replace(/?(\d+)(\w+),??/g,(_,a,[b])=>({r:13,g:14,b:15}[b]>a&&[])))?i+1:0,0)

// d2 p2

$('pre').innerText.trim().split`\n`.reduce((e,n)=>(x={r:0,g:0,b:0},n.replace(/(\d+) (\w)/g,(_,n,r)=>{x[r]=n>+x[r]?n:x[r]}),e+x.r*x.g*x.b),0)

// d3 p1

I=$('pre').innerText,A=0,I.replace(/\d+/g,(n,e)=>{for(i=a=0;3>i;a+=I.substring(e-=[1,-141,282][i++],e+([]+n).length+2));/[^\d\.\n]/.test(a)&&(A+=+n)}),A

// d3 p2

A=99;I=$('pre').innerText.replace(/\*/g,_=>String.fromCharCode(A++));A=0;G={};I.replace(/\d+/g,(n,e)=>{for(i=a=0;3>i;a+=I.substring(e-=[1,-141,282][i++],e+([]+n).length+2));(V=[...a].find(c=>c>'b'))&&(G[V]?A+=G[V]*n:G[V]=n)}),A

// d4 p1

A=0;$('pre').innerText.replace(/((\d+ +)+)\| +((\d+\s+)+)/g,(...[,a,,b])=>{q=s=>s.trim().split(/ +/);w=q(b).reduce((_, b)=>q(a).includes(b)?_+1:_,-1);~w?A+=2**w:0}),A

// d4 p2

c=0,(R=i=>{i.map(([i,l,n])=>{c++,R(A.slice(n,n+l.filter?.(l=>i.includes(l)).length))})})(A=$('pre').innerText.split`\n`.map((i,l)=>[...i.slice(10).split(/ \| +/).map(i=>i.split(/ +/)),l+1])),--c

// d5 p1

a=9e9,I=$('pre').innerText,M=I.match(/p:\n([\s\S]+?)(\n\n|$)/g).map(d=>d.match(/(\d+ ?){3}/g));I.split`\n`[0].match(/\d+/g).map(s=>{M.map(m=>(s=+s,m.some(A=>([D,S,L]=A.split` `,s>=+S&&+S+ +L>s?s=s-+S+ +D:0)))),a>s?a=s:0});a

// d5 p2

a=9e9,I=$('pre').innerText,M=I.match(/p:\n([\s\S]+?)(\n\n|$)/g).map(s=>s.match(/(\d+ ?){3}/g)),I.split`\n`[0].match(/\d+ \d+/g).map(n=>{for([n,l]=n.split` `,i=l;i--;)s=+n+i,M.map(a=>a.some(a=>([D,S,L]=a.split` `,s>=+S&&+S+ +L>s?s=s-+S+ +D:0))),a>s?a=s:0}),a

// d6 p1

for(I=$('pre').innerText.match(/\d+/g),A=1,q=4;q--;){for(n=+I[q],D=+I[q+4],v=0,i=n;i--;(n-(i+1))*(i+1)>D?v++:0);A*=v}A

// d6 p2

for(I=$('pre').innerText.replace(/[^\d\n]/g,[]).split`\n`,v=0,i=I[0];i--;(I[0]-(i+1))*(i+1)>I[1]?v++:0)v
