#include <stdio.h>

void main() {
    char b[323][32];long f=1,x=0,y=0,t=0,i=0;
    for(int ch;(ch=getchar())^EOF;b[i/32][i++%32]=ch);
    for(i=5;i--;f*=t)for(x=y=t=0;323>y;x=(x+((2*i)+1)%8)%31,y+=1+(i/4))
    '#'^b[y][x]||++t;printf("%lu",f);
}
