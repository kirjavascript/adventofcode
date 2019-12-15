input = `.#..##.###...#######
##.############..##.
.#.######.########.#
.###.#######.####.#.
#####.##.#.##.###.##
..#####..#.#########
####################
#.####....###.#.#.##
##.#################
#####.##.###..####..
..######..##.#######
####.##.####...##..#
.#####..#.######.###
##...#.##########...
#.##########.#######
.####.#.###.###.#.##
....##.##.###..#####
.#.#.###########.###
#.#.#.#####.####.###
###.##.####.##.#..##`;

input=require('fs').readFileSync('input.txt', 'utf8').trim()

// part 1

// coords = input.split`\n`.flatMap((d,i)=>[...d].map((d,I)=>d=='#'&&[I,i])).filter(d=>d)
// coords = [];input.split`\n`.map((d,i)=>[...d].map((d,I)=>d=='#'&&coords.push([I,i])))

// T=0;
// coords.forEach(b => {
//     tail = coords.filter(d=>d!=b)
//     const [x,y]=b;

//     o = new Set();

//     tail.forEach(([X,Y]) => {
//         o.add(Math.atan2(Y-y,X-x));
//     })

//     if (o.size>T) {
//         B=b;
//         T=o.size;
//     }
// })

// console.log(T);

C=[],input.split`\n`.map((o,a)=>[...o].map((o,s)=>"#"==o&&C.push([s,a]))),T=0,C.map(([a,s])=>{o=new Set,C.map(([n,d])=>{o.add(Math.atan2(d-s,n-a))}),o.size>T&&(T=o.size)}),T
