(ns proj.core
  (:require [clojure.browser.repl :as repl])
  )



;; (repl/connect "http://localhost:9000/repl")

(enable-console-print!)

;;return a javascript object with different attributes
(defn ^:export start []
  ;;(println "Hello world! \n")
  ;;(println "this is the change in the cljs file")
                                        ;(js/console.log '(1 2))
  (rand-int 30)
  ;;(get 'a {'a 3 'b 4})
  ;;((fn [a] (+ a 2) ) 2)
  )

(def ^:export k_max_d
  500
  )

(def ^:export k_min_d
  50
  )

;; event 12s into the future
(defn ^:export start_t []
  ;;10000
  (+ 2000 (* 10000 (rand)))
  )

;;event of duration 2s long
(defn ^:export end_t [st]
  (+ st 4000)
  )

;; (+ k_min_d
;;         (* (- k_max_d k_min_d) (rand))
;;         )


(defn ^:export end_y [st]
  (+ st (* st (rand)))
  ;;(* k_max_d (rand))
  )

(defn ^:export start_y []
  80
  ;;(* k_min_d (rand))
  )


;; function that stores the data of the gesture
(defn ^:export d [tso]

  (let [
        st_t (start_t)
        st_y (start_y)
        ed_t (end_t st_t)
        ed_y (end_y st_y)
        ]
    [ [(+ tso st_t) st_y  0]
      [(+ (+ tso st_t) (/ (- ed_t st_t) 2) )
       (+ st_y (/ (- ed_y st_y) 2) )
       15]
      [(+ tso ed_t) ed_y 0]
      ]
    )
  )

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



;;(combinational-parameters [ [[1 2 3] [ 2 3 4] [3 4 5]] [[5 4 7] [ 8 3
;;10] [11 2 13]] ] )

(defn ^:export combinational-parameters [scoreEvents & args]

  (let [
        gref (last scoreEvents)
        g1 (rand-nth scoreEvents) ;;fibonacci - last two
        g2 (rand-nth scoreEvents)
        numParam (count (first gref))  ;;number of parameters in the gesture
        i (rand-int numParam)
        n (- numParam i)
        newGesure1toI (map
                       (fn [parameterI]
                         ;; get the valies for the ith parameter from g1
                         (map (fn [g11]
                                ;;(println "parameterIj" parameterI)
                                (nth g11 parameterI)
                                )
                              g1)
                         )
                       (range i))
        newGestureitoN  (map
                         (fn [parameterI]
                           ;; get the valies for the ith parameter from g1
                           (map (fn [g11]
                                  ;;(println "parameterI" parameterI)
                                  (nth g11 parameterI)
                                )
                              g2)
                           )
                         (map (partial + i) (range n)))

        combined (concat
                  newGesure1toI
                  newGestureitoN
                  )
        well-formed (cond
                     (= true (well-formedness combined)) combined
                     :else (combinational-parameters scoreEvents)
                     )
        combined2 (map
                  (fn [i]
                    (map
                     (fn [g11]
                       (nth g11 i)
                       )
                     well-formed)
                    )
                  (range numParam))
        aesthetic-score (aesthetic-rule-retro gref combined2)
        combined2 (map
                   (fn [g]
                     (lazyevl g 0 [])
                     )
                   combined2)
        ;;time scaled
        ;; combined2 (cond
        ;;            (> (count args) 0) (map
        ;;                                (fn [g]
        ;;                                  (assoc-ud g 0 (+ (first args) (* 1000 (nth g 0)) ) 0 [])
        ;;                                  )
        ;;                                combined2)
        ;;            :else combined2
        ;;            )

        ]
    (println "i is" i n aesthetic-score)
    (into []
     combined2
     )
    )

  )



(set! *main-cli-fn* start)
