#include <stdio.h>

void main() {
    char b[323][31];
    long f=1;
    int x=0,y=0,t=0,i=0;

    for(
        int ch;
        (ch=getchar())^EOF;
        ch^'\n'&&(b[i/31][i%31]=ch,i++)
    );

    for(i=5;i--;f*=t)
        for(x=y=t=0;323>y;x=(x+((2*i)+1)%8)%31,y+=1+(i/4))
           '#'^b[y][x]||++t;

    printf("%lu", f);
}
