u=r=z=0;document.body.innerText.split(/(.)(\d*),? ?/).map(d=>d&&(+d?(z%2?r+=z%3?+d:-d:u+=z?-d:+d):(d=='L'?z=z?--z:3:z=++z%4))),u+r

// paste into the browser console at http://adventofcode.com/2016/day/1/input

// thanks to tcsc && falafel on ##javascript for some improvements
