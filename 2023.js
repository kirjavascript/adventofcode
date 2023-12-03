// d1 p1

eval(
    document.body.innerText.trim().split`\n`.map(
        d => (q = d.replace(/[^\d]/g, ''), q[0] + q.at(-1)),
    ).join`+`,
);

// d1 p2

n=`_|one|two|three|four|five|six|seven|eight|nine`,a=0,document.body.innerText.trim().split`\n`.map(t=>(s=[...t].map((a,i)=>(q=n.split`|`.indexOf(t.match(RegExp(`^.{${i}}(${n})`))?.[1]),~q?q:1/a?a:[])).join``,a+=+(s[0]+s.at(-1)))),a


// d2 p1

document.body.innerText.trim().split`\n`.reduce((A, d, i) =>
    A += d
        .replace(/.+: /, [])
        .split(';')
        .every(
            (d) =>
                !d.replace(
                    / ?(\d+) (\w+),? ?/g,
                    (_, a, [b]) => ({ r: 13, g: 14, b: 15 }[b] > a && []),
                ),
        )?i+1:0,
    0
);

// d2 p2

document.body.innerText.trim().split`\n`.reduce((e,n)=>(x={r:0,g:0,b:0},n.replace(/(\d+) (\w)/g,(_,n,r)=>{x[r]=n>+x[r]?n:x[r]}),e+x.r*x.g*x.b),0)

// d3 p1

// I=document.body.innerText;


// W = 141;

// A=0;I.replace(/\d+/g,(n,p)=>{
//     /[^\d\.\n]/.test(
//         [
//         I.substring(p-=1,p+(l=([]+n).length)+2),
//         I.substring(p+=W,p+l+2),
//         I.substring(p-=W*2,p+l+2),
//     ].join``)&&(A+=+n)
// });A

I=document.body.innerText,A=0,I.replace(/\d+/g,(n,e)=>{for(i=a=0;3>i;a+=I.substring(e-=[1,-141,282][i++],e+([]+n).length+2));/[^\d\.\n]/.test(a)&&(A+=+n)}),A
