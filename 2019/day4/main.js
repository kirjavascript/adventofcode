o=0,a=240298,b=784956;

[...Array(b-a).keys()]
    .forEach(d => {
        num = d + a + []
        // console.log(num);
        if (RegExp([...Array(10)].map((_,i)=>`([^${i}]|^)${''+i+i}([^${i}]|$)`).join`|`).test(num)&&[...num].sort().join``==num) {
            o++;
            // console.log(num, n2);
        }
    })


// part 1
// for(o=0,b=784956;n=b+[],/(.)\1/.test(n)&&[...n].sort().join``==n&&++o,b--,b>240298;)o
// for(o=0,b=784956;n=b+[],--b>240298;)/(.)\1/.test(n)&&[...n].sort().join``==n?++o:o
// for(o=0,b=784956;n=b+[],--b>240298;)o+=+/(.)\1/.test(n)&&[...n].sort().join``==n
// for(o=0,b=784956;n=b+[],--b>240298;)o+=/(.)\1/.test(n)&&[...n].sort().join``==n
// part 2
// for(o=0,b=784956;n=b+[],--b>240298;)o+=RegExp([...[]+{}].map((_,i)=>`([^${i}]|^)${''+i+i}([^${i}]|$)`).join`|`).test(n)&&[...n].sort().join``==n
// for(o=0,b=784956;n=b+[],--b>240298;)o+=RegExp([...[]+{}].map((_,i)=>'([^'+i+']|^)'+i+i+'([^'+i+']|$)').join`|`).test(n)&&[...n].sort().join``==n

console.log(o);
