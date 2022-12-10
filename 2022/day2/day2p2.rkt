#lang racket

(define lines (file->lines "input.txt"))

; TODO: replace with pattern matching?
(define player1 (hash
                 "A" 0
                 "B" 1
                 "C" 2))

(define player2 (hash
                 "X" 0
                 "Y" 1
                 "Z" 2)) ; + 1


#| X -> -1 mod 3 -> +0 |#
#| Y -> take first score -> + 3 |#
#| Z -> +1 mod 3 -> +6 |#


(define (get-moves d) (list
    (hash-ref player1 (first d))
    (hash-ref player2 (second d))
    )
  )

(define (draw-points d) (+ 4 d))
(define (lose-points d) (+ 1 (modulo (- d 1) 3)))
(define (win-points d) (+ 7 (modulo (+ d 1) 3)))

(define (get-points d)
  (match (second d)
    [1 (draw-points (first d))]
    [2 (win-points (first d))]
    [0 (lose-points (first d))]
    )
  )

(define out (map (lambda (line) (get-points (get-moves (string-split line)))) lines))

(print out)
(print (apply + out)) ; sum
