(ns server.utilities)


(def sqrt (.-sqrt js/Math))

(def abso (.-abs js/Math))

;;the simplest AI that repeats the last played event

(defn ^:export simple-repeat [most_recent_gesture tso]
  (let [
        t1 (first (first most_recent_gesture))
        common-denom (* 5000 (inc (rand)))
        out (doall (map
                    (fn [o]
                      [(+ tso (- (nth o 0) (nth (first most_recent_gesture)  0) ) common-denom)
                       (nth o 1)
                       (nth o 2)
                       ]
                      )
                    most_recent_gesture))
        ]
    out
    )
  )


(defn ^:export tranpose [most_recent_gesture tso]
  (let [
        t1 (first (first most_recent_gesture))
        common-denom (* 5000 (inc (rand)))
        y_rand (rand-nth (concat (range 30) (range -30))) ;; small tranpositions
        out (doall (map
                    (fn [o]
                      [(+ tso (- (nth o 0) (nth (first most_recent_gesture)  0) ) common-denom)
                       (+ y_rand (nth o 1) )
                       (nth o 2)
                       ]
                      )
                    most_recent_gesture))
        ]
    out
    )
  )


;; simplest rule:

;; Musically, this corresponds to pitch complement;
;; higher pitch -> lower pitch
;; lower pitch -> higher complement
;; time is still random
;; most recent gesture

(defn ^:export rule_inverse [most_recent_gesture tso]
  (let [
        t1 (first (first most_recent_gesture))
        common-denom (* 5000 (inc (rand)))
        y_compl (fn [y1]
                  (- 150 y1) ;;150 is ymax
                  )
        out (doall (map
                    (fn [o]
                      [(+ tso (- (nth o 0) (nth (first most_recent_gesture)  0) ) common-denom)
                       (y_compl (nth o 1))
                       (nth o 2)
                       ]
                      )
                    most_recent_gesture))
        ]
    out
    )
  )

;; Harmonize, say for example,
;; 0 - 40 (low), 40-80 (medium), 80-120 (high)
;; anything low harmonizes with anything low
;; medium harmonizes with high, medium, and low,
;; high harmonizes with medium

;;ofc this rule makes sense only when y is connected to frequency
;; not so much sense when it is connected gain

(defn ^:export rule_harmonize [most_recent_gesture tso]
  (let [
        t1 (first (first most_recent_gesture))
        common-denom (* 5000 (inc (rand)))
        y_rand (rand-int 30)
        harmony-rules (fn [y1]
                        (cond
                         (and (>= y1 0) (< y1 30))
                         (+ y1 y_rand)

                         (and (>= y1 30) (< y1 60))
                         ;;(rand-nth (list (+ y1 y_rand) (- y1 y_rand)))
                         (+ y1 y_rand)

                         (and (>= y1 60) (< y1 120))
                         (- y1 y_rand)

                         :else (- y1 y_rand) ;;med
                         )
                        )
        out (doall (map
                    (fn [o]
                      [(nth o 0)
                       (harmony-rules (nth o 1))
                       (nth o 2)
                       ]
                      )
                    most_recent_gesture))
        ]
    out
    )
  )


(defn ^:export square [x]
  (* x x)
  )


;; atonal rule that says no note is repeated within the row and contains
;; all tweleve notes?
;; in this case, the gesture contains only distinct frequencies

(defn ^:export well-formedness [gesture]

  (let [
        freq (map (fn [g]
                    (nth g 1)
                    )
                  gesture)
        cnt (count (distinct freq))
        ]
    (cond
     (= cnt (count gesture)) true
     :else nil
     )
    )

  )


(defn ^:export assoc-ud [vect ind new-val ctr ret]

  (cond
   (= ctr 0)  (assoc-ud vect ind new-val (inc ctr) [(first vect)] )
   (= ctr ind) (assoc-ud vect ind new-val (inc ctr) (conj ret new-val )  )
   (< ctr (count vect)) (assoc-ud vect ind new-val (inc ctr) (conj ret (nth vect ctr) ) )
   :else ret
   )

  )

(defn ^:export lazyevl [vect ctr ret]

  (cond
   (= ctr 0)  (lazyevl vect (inc ctr) [(first vect)] )
   (< ctr (count vect)) (lazyevl vect (inc ctr) (conj ret (nth vect ctr) ) )
   :else ret
   )

  )


;;suppose the system is supposed to make retrograde inversions
(defn ^:export aesthetic-rule-retro [oGest newGest]

  (let [
        n (dec (count oGest))
        temp oGest
        retro (map-indexed
               (fn [ind g]
                 (assoc-ud g 1 (nth (nth temp (- n ind)) 1) 0 [])
                 )
               oGest)

        retro-seq (map
                   (fn [r]
                     (nth r 1)
                     )
                   retro)

        new-seq (map
                   (fn [r]
                     (nth r 1)
                     )
                   newGest)
        ]
    ;;(print retro)
    (reduce +    (map abso (map
                           -
                           retro-seq new-seq)))
    )

  )
