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
        g1 (last scoreEvents) ;;fibonacci - last two
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

;; hi, low and number of steps to deterimine the step size
;; returns a function that returns a number based on the number of steps

(defn ^:export knobbification-step [hi low step]
  (/ (- hi low) step)
  )


(defn ^:export knobbification [scoreEvents]

  (let [
        g1 (last scoreEvents)
        knobbify (map
                  (fn [g]
                    (assoc-ud g 1
                              (let [
                                 freq (nth g 1)
                                 numSteps (rand-nth (list (rand-int -5) (rand-int 5)))
                                 ]
                             (+ freq (* numSteps (knobbification-step 150 50 100) ))
                             )
                              0 [])
                    )
                  g1)

        well-formed (cond
                     (= true (well-formedness knobbify)) knobbify
                     :else (knobbification scoreEvents)
                     )
        aesthetic-score (aesthetic-rule-retro g1 well-formed)
        result well-formed
        ]
    (println "i is" aesthetic-score)
    (into [] result)
    )
  )


(defn ^:export combinational-transformation [scoreEvents]

  (let [
        g1 (last scoreEvents)
        n (dec (count g1))
        temp g1
        retro (map-indexed
               (fn [ind g]
                 (assoc-ud g 1 (nth (nth temp (- n ind)) 1) 0 [])
                 )
               g1)

        ]
    (into [] retro)
    )

  )



;;equal arrays
(defn ^:export identify-id [g1 g2]
  (cond
   (= g1 g2) 'id
   :else nil
   )
  )


(defn ^:export create-retro [g1]
  (let [
        n (dec (count g1))
        temp g1
        retro   (map-indexed
                 (fn [ind g]
                   (assoc-ud g 1 (nth (nth temp (- n ind)) 1) 0 [])
                   )
                 g1)

        ]
    retro
    )
  )

(defn ^:export create-id [g1]
  (let [
        n (dec (count g1))
        temp g1
        retro   (map-indexed
                 (fn [ind g]
                   (assoc-ud g 1 (nth g 1) 0 [])
                   )
                 g1)
        ]
    retro
    )
  )

;;equal arrays, checks if g2 is the retro of g1
;; retro(g1) = g2

(defn ^:export identify-retro [g1 g2]
  (let [
        retro (create-retro g1)
        ]
    (cond
     (= retro g2) 'retro
     :else nil
     )
    )
  )

(defn ^:export apply-id [g1]
  (create-id g1)
  )

(defn ^:export apply-retro [g1]
  (create-retro g1)
  )

;;triggered when no function is found
(defn ^:export apply-std [g1]
  ;;(println "applyinh std")
  (let [
        vect [[1000 35 3] [3000 55 4] [4000 45 6]]
        ]
    (map-indexed
     (fn [ind g]
       (assoc-ud g 1 (nth g 1) 0 [])
       )
     vect)
    )

  )

;; op map contains operations required to idnetify transformations such
;; as {identity (fn identify-identity [g1 g2], retro etc}

;; op : '(id retro)
;; op-identify-fn : {'id identify-id, 'retro identify-retro }
;; op-apply-fn : {'id apply-id, 'retro apply-retro}

(defn ^:export retrieve-fn [op1 op2]

  (cond
   (and (= op1 nil) (= op2 nil)) 'no-match
   :else  (get
           {{'op1 'id 'op2 'id} {'fn1 'id}
            {'op1 'retro 'op2 'id} {'fn1 'retro}
            {'op1 'id 'op2 'retro} {'fn1 'id 'fn2 'retro}
            {'op1 'retro 'op2 'retro} {'fn1 'id 'fn2 'retro}
            }
           {'op1 op1 'op2 op2 }
           )
   )
  )


(defn ^:export analogy-making [scoreEvents op op-identify-fn op-apply-fn & answer]

  (let [
        cnt (count scoreEvents)
        g1 (cond
            (> cnt 2) (nth scoreEvents (- cnt 2))
            :else (nth scoreEvents (dec cnt))
            )   ;;(first scoreEvents)
        g2 (nth scoreEvents (dec cnt))  ;;(second scoreEvents)
        g3 (last scoreEvents)
        op1 (filter identity
                    (map
                     (fn [operator]
                       ((get op-identify-fn operator) g1 g2)
                       )
                     op))  ;;returns all applicalbe functions for g1,g2
        op2 (filter identity
                    (map
                     (fn [operator]
                       ((get op-identify-fn operator) g1 g3)
                       )
                     op))  ;;returns all applicalbe functions for g1,g2

        ;;op1 (rand-nth op1)
        ;;op2 (rand-nth op2)
        op1 (cond
             (= (count op1) 0) nil
             (= 0 (count answer)) (rand-nth op1) ;;no operator found
             :else (get (first answer) 'op1)
             )

        op2 (cond
             (= (count op2) 0) nil
             (= 0 (count answer)) (rand-nth op2) ;;no operator found
             :else (get (first answer) 'op2)
             )

        fn-id (cond
               (= 0 (count answer)) (let [
                                        ans (retrieve-fn op1 op2)
                                        ]
                                      (cond
                                       (= ans 'no-match) 'none
                                       (= (count ans) 2)
                                       (get ans (rand-nth '(fn1 fn2)))
                                       :else (get ans 'fn1)
                                       )
                                      )
               :else (let [
                           ans (retrieve-fn op1 op2)
                           fn-no (get (first answer) 'ans)
                           ]
                       ;;(println "going here" ans fn-no)
                       (cond
                        (= ans 'no-match) 'none
                        (= fn-no 'fn1) (get ans 'fn2)
                        :else (get ans 'fn1)
                        )
                       )
               )
        ]
    ;;(println g1 g2 g3)
    ;;(println "op1" op1 op2 fn-id answer)
    {'op1 op1 'op2 op2 'ans fn-id 'outp  ((get op-apply-fn fn-id) g3)}
    )

  )


;; op : '(id retro)
;; op-identify-fn : {'id identify-id, 'retro identify-retro }
;; op-apply-fn : {'id apply-id, 'retro apply-retro}

(defn ^:export analogy-stub [scoreEvents]

  (let [
        op '(id retro)
        op-identify-fn {'id identify-id, 'retro identify-retro }
        op-apply-fn {'id apply-id, 'retro apply-retro 'none apply-std}
        ans (analogy-making scoreEvents op op-identify-fn op-apply-fn)
        result (get ans 'outp)
        ]
    (into [] result)
    ;;result
    )
  )



;; self-watching, is to observe analogies being formed, and whether same
;; analogies are formed.

(defn ^:export self-watching [scoreEvents op op-identify-fn op-apply-fn it answer]
  (cond
   (nil? answer) ;;first time
   (self-watching scoreEvents op op-identify-fn op-apply-fn (dec it)
                  (analogy-making scoreEvents op op-identify-fn op-apply-fn)
                  ) ;;to get an answer

   :else
   (let [
         ans (analogy-making scoreEvents op op-identify-fn op-apply-fn)  ;;find a new answer
         ]
     (cond
      (and (= answer ans) (> it 0))
      (self-watching scoreEvents op op-identify-fn op-apply-fn (dec it) ans)

      (and (not= answer ans) (> it 0))
      (self-watching scoreEvents op op-identify-fn op-apply-fn (dec it) ans)

      ;; (do
      ;;   ;;(println "new soln" it "is" (get ans 'outp) )
      ;;   )

      :else (analogy-making scoreEvents op op-identify-fn op-apply-fn answer)

      ;; (do
      ;;         ;;(println "definitely produce new solution compared to last" answer)

      ;;         ;;(get  'outp)

      ;;         )
      )

     )

   )

  )

(defn  ^:export self-watching-stub [scoreEvents]

  (let [
        op '(id retro)
        op-identify-fn {'id identify-id, 'retro identify-retro }
        op-apply-fn {'id apply-id, 'retro apply-retro 'none apply-std}
        ans (self-watching scoreEvents op op-identify-fn op-apply-fn 5 {})
        result (get ans 'outp)
        ]
    (into [] result)
    )
  )



(set! *main-cli-fn* start)
