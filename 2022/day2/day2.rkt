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


#| 0 0 d 3 |#
#| 0 1 l 0 +1 |#
#| 0 2 w 6 +2 % 3 |#


(define (getMoves d) (list
                       (hash-ref player1 (first d))
                       (hash-ref player2 (second d))
                       )
  )

(define (getScore d)
  (if (equal? (first d) (second d))
    3
    (if (equal? (first d) (modulo (+ (second d) 1) 3) ) 0 6)
    )
  )

(define (getPoints d)
   (+ (getScore d) (+ 1 (second d)))
  )

(define out (map (lambda (line)
                   (getPoints (getMoves (string-split line)))
                   ) lines))


(print (apply + out))
