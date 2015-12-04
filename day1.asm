; AoC Day1 in 68000 Motorola Assembly
; thom@kirjava.xyz

    lea	($FFFF0000).w,a0
    clr.l   d0

-
    move.b	(a0)+,d1
    cmpi.b  #$28,d1 ; "("
    bne.s   +
    add.l   #1,d0
    bra.s   -
+
    cmpi.b  #$29,d1 ; ")"
    bne.s   +
    sub.l   #1,d0
    bra.s   -
+

    ; result in d0
