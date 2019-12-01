eval(store.get('').split('\n').map(f=>eval(`for(t=0;f=(0|f/3)-2,f>0;)t+=f`)).join`+`)
eval(store.get('').replace(/\d+\n/g,f=>eval(`for(t=0;f=(0|f/3)-2,f>0;)t+=f`)+'+'))
