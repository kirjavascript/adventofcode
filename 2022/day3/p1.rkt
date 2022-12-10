#lang racket

(define lines (file->lines "input.txt"))

(define (priority item)
    (define value (char->integer item))
    (if (> 97 value)
      (+ (- value 65) 27)
      (- value 96)
    )
  )

(define (get-dupe line)
  (define split-index (/ (string-length line) 2))
  (define first-sack (substring line 0 split-index))
  (define second-sack (substring line split-index))

      (findf (lambda (arg)
           (string-contains? second-sack (make-string 1 arg))
        ) (string->list first-sack))
  )

(define (get-priority item) (priority (get-dupe item)))

(define out (map get-priority lines))

(print out)
(print (apply + out)) ; sum
