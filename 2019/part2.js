eval(fetchSync('http://ix.io/23iP').trim().split('\n').map(f=>eval(`for(t=0,f=+f;f=(0|f/3)-2,f>0;)t+=f`)).join`+`)
