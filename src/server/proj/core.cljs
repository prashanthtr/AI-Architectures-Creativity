(ns proj.core
  (:require [clojure.browser.repl :as repl]))

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

(def ^:export start_t
  (+ 2000 (* 10000 (rand)))
  )

(def ^:export end_t
  (+ start_t
     (+ k_min_d
        (* (- k_max_d k_min_d) (rand))
        )
     )
  )

(def ^:export end_y
  (* k_max_d (rand))
  )

(def ^:export start_y
  (* k_min_d (rand))
  )


;; function that stores the data of the gesture
(defn ^:export d []
  [ [start_t start_y 0]
    [(+ start_t (/ (- end_t start_t) 2) )
     (+ start_y (/ (- end_y start_y) 2) )
     15]
    [end_t end_y 0]
    ]
  )

;;combination improvisation that takes a pattern of numbers and produces
;;a new pattern.
;; score events - ((() () ()) (() () ()) (() () ())) list of n tuples.
;;event is of the form; [time, height, intensity]
;; optimized in terms of time of selected events

(defn combination_creativity_ga [scoreEvents opt]

  (let [
        num_ges (rand-int 10)          ;;selects number of gestures
        time_new_gesture (* 10 (rand)) ;; a random number betwen 0 and 10
        time_split (/ time_new_gesture num_ges) ;;decide how many gestures to split the time between

        ;;for the number of gestuers, use the time to select the number of elements from each gesture
        selected_evnts (map
                        (fn [s]
                          (let [
                                ;; select the arrays in the event that do not exceed the time limit
                                evnt (rand-nth scoreEvents)
                                select_evnt (filter identity (map
                                                              (fn [e]
                                                                (cond
                                                                 (> (first e) time_split) nil
                                                                 :else e
                                                                 )
                                                                )
                                                              evnt))
                                ]
                            select_evnt
                            )
                          )
                        (range num_gest))
        optimal_selection (optimization selected_evnts opt)
        ]
    (cond
     (optimal_selection) selected_evnts
     :else (combination_creativity scoreEvents opt)
     )
    )

  )

(defn random_selection []

  (let [
        num_ges (rand-int 10) ;;selects number of events in a gesture
        time_new_gesture (* 10 (rand)) ;; time of the gesture as a random number between 0 -10
        time_split (/ time_new_gesture num_ges)
        ;;decide how to split the time between the
        ;;gestures. Right now its an equal split
        selected_evnts (map
                        (fn [n]
                          (list time_split (rand_y) (rand_z))
                          )
                        (range num_gest))

        ]
    selected_evnts
    )
  )

;;here, the optimizaition criteria is to select an event that is
;;metaphorically distant from any of the given distant events

(defn combinational_creativity_metaphor [scoreEvents opt]

  (let [
        e1 (rand-nth scoreEvents)
        e2 (rand-nth scoreEvents)
        selected_evnt (random_selection)
        d1 (distance e1 e3)
        d2 (distance e2 e3)
        optimal_selection (check d1 d2 opt)
        ]
    (cond
     (optimal_selection) selected_evnts
     :else (combination_creativity scoreEvents opt)
     )
    )
  )


;; ;; incrementally creates variations of an event by tweaking one or more parameters in the

;; (defn variations_knobbification)

;; ;; variations on knobbification requires two events to move the knob?
;; ;; well isnt that taken care of by the max and min parameters
;; (defn variations_knobbification2 [scoreEvents opt]
;;   )

;; (defn square [x]
;;   (* x x)
;;   )

;; ;; needs only one event to create a variation

;; (defn variations_case_based [scoreEvents cases opt]

;;   (let [
;;         evnt (rand-nth scoreEvents)
;;         retrieved-evnts (map
;;                          (fn [caseC]
;;                            ;;each parameter of the case
;;                            (map
;;                             (fn [case-b evnt-b]
;;                               (sqrt (mod (- (square case-b) (square evnt-b)  ))
;;                                     )
;;                               caseC evnt)
;;                             )
;;                            cases)
;;                          )
;;         optimal_selection (filter identity (map
;;                                             (fn [r]
;;                                               (optimization r opt) ;;returns nil if optimization criteria is not met or else
;;                                               )
;;                                             retrieved-evnts))
;;         ]
;;     (cond
;;      (sym? optimal_selection) optimal_selection
;;      (= nil optimal_selection) (println "number of cases need to enlarged")
;;      :else (rand-nth optimal_selection)
;;      )
;;     )
;;   )

;; ;;the difference is that the optimziation condition is based on adpativity, and includes multiple

;; (defn variations_case_based_adaptive [scoreEvents cases opt opt_adaptivity]

;;   (let [
;;         evnt (rand-nth scoreEvents)
;;         retrieved-evnts (map
;;                          (fn [caseC]
;;                            ;;each parameter of the case
;;                            (map
;;                             (fn [case-b evnt-b]
;;                               (sqrt (mod (- (square case-b) (square evnt-b)  ))
;;                                     )
;;                               caseC evnt)
;;                             )
;;                            cases)
;;                          )
;;         optimal_selection (filter identity (map
;;                                             (fn [r]
;;                                               (optimization r opt) ;;returns nil if optimization criteria is not met or else
;;                                               )
;;                                             retrieved-evnts))
;;         optimal_selection_adaptive (filter identity (map
;;                                             (fn [r]
;;                                               (optimization r opt_adaptivity) ;;returns nil if optimization criteria is not met or else
;;                                               )
;;                                             retrieved-evnts))
;;         optimal_selection_2 (fitness (concat optimal_selection optimal_selection_adaptive))
;;         ]
;;     (cond
;;      (optimal_selection_2) optimal_selection ;; have an additional object inside that says it is an adpative selected evnt
;;      :else (println "number of cases need to enlarged")
;;      )
;;     )
;;   )

;; (defn variatons_analogy [scoreEvents ]

;;   (let [
;;         src1 (rand-nth scoreEvents)
;;         selected_evnt (cons selected_evnts e1)
;;         target1 (rand-nth-unique selected-evnts scoreEvents)
;;         selected_evnt (cons selected_evnts e2)
;;         src2 (rand-nth-unique selected-evnts scoreEvents)

;;         ;;s1 contains all the values of a parameter and t1 contains all the values of a parameter
;;         ;;src1 is a list of n-tuples
;;         ;;s1 is a single n-tuple
;;         ;; what wee need s1 to be is a list of 1st tyuple, 2nd tuple etc.

;;         ;;(map-fn s1 t1) ;;map-fn could be number idnetifying sequence, sameness, difference, inversion, progression,
;;         ;; map-fn returns a function
;;         src-tar-mapping (map
;;                          (fn [s1 t1]
;;                            (let [
;;                                  src-fn (map-fn s1 src1) ;;map first of src1
;;                                  tar-fn (map-fn t1 tar1)
;;                                  attr-fn (cmp-src-tar src-fn tar-fn)
;;                                  ]
;;                              {'fn attr-fn 'description 'same} ;;or description could have the value different, or opposite
;;                              )
;;                            )
;;                          (range (count src1) (count tar1) ))

;;         src-src-mapping (map
;;                          (fn [s1 s2]
;;                            (let [
;;                                  src-fn (map-fn s1 src1) ;;map first of src1
;;                                  tar-fn (map-fn s2 tar1)
;;                                  attr-fn (cmp-src-tar src-fn tar-fn)
;;                                  ]
;;                              {'fn attr-fn 'description 'same} ;;or description could have the value different, or opposite
;;                              )
;;                            )
;;                          (range (count src1) (count src2) ))
;;         ;;for each parameters
;;         trans-fn (map
;;                   (fn [s1 s2]
;;                     (cmp-src-tar s1 s2) ;;same/differentx
;;                     )
;;                   src-tar-mapping src-src-mapping)

;;         param-select (rand-nth params)
;;         tar2 src1
;;         temp-tar2 (map param-select src2) ;; selects the parameters of src2 that have to be transformed
;;         new-param (map trans-fn temp-tar2) ;; applies the mapping on those transofmrations
;;         ;; feeds in those new-parameters to tar2
;;         new-tar2 (map
;;                   (fn [old new]
;;                     (assoc old param-select new) ;;param-selct contains the number of the parameter in the gesture
;;                     )
;;                   tar2 new-param)
;;         ]
;;     new-tar2
;;     )
;;   )

;; ;;rule-sets contain the preconditions for each type of gesture to be produced
;; ;; param-1 , n1 <val< n2
;; ;; param-2, n4 < val-1 < n3
;; ;; param-3, val, requires: param-1, param-2,
;; ;; param-4, param-3, n5 < val < n6
;; ;; then, gesture -> high-x-value, low-time, high-amplitud,

;; ;; param-1 , n11 <val< n22
;; ;; param-2, n44 < val-1 < n33
;; ;; param-3, val, requires: param-1
;; ;; param-4, param-3, n55 < val < n66
;; ;; then, gesture -> low-y-value, high-x, low-z,

;; (defn ES [scoreEvents rule-sets]

;;   (let [
;;         working_memory scoreEvents
;;         satisfied-rules (map
;;                          (fn [r]
;;                            (let [
;;                                  pre-conditions (pre-cond r) ;;precondds - presence of certain events, values of certain paramters
;;                                  num_rules (count pre-conditions)
;;                                  result (get rule-set 'output)
;;                                  pre-cond-evnt (map
;;                                                 (fn [p]
;;                                                   (cond
;;                                                    (= 'evnt (get p 'condition)) p
;;                                                    :else nil
;;                                                    )
;;                                                   )
;;                                                 pre-conditions)
;;                                  pre-cond-val (map
;;                                                (fn [p]
;;                                                  (cond
;;                                                   (= 'val (get p 'condition)) p ;; contains a map that specifies a value range of a certain param number
;;                                                   :else nil
;;                                                   )
;;                                                  )
;;                                                pre-conditions)
;;                                  evnt-present (filter identity (map
;;                                                                 (fn [p]
;;                                                                   (cond
;;                                                                    (not= -1 (.indexOf working_memory p)) true
;;                                                                    :else nil
;;                                                                    )
;;                                                                   )
;;                                                                 pre-cond-evnt))
;;                                  val-present (filter identity
;;                                                      (map
;;                                                       (fn [p]
;;                                                         (let [
;;                                                               p-num (get p 'num)
;;                                                               p-min (get p 'min)
;;                                                               p-max (get p 'max)
;;                                                               test-p-val (get working_memory p-num)
;;                                                               ]
;;                                                           (cond
;;                                                            (and (> test-p-val p-min) (< test-p-val p-max) ) true
;;                                                            :else nil
;;                                                            )
;;                                                           )
;;                                                         )
;;                                                       pre-cond-val)
;;                                                      )
;;                                  ]
;;                              (cond
;;                               (= num_rules (+ (count evnt-present) (count val-present)))  result
;;                               :else nil
;;                               )
;;                              )
;;                            )
;;                          rule-sets)
;;         ]
;;     (cond
;;      (not= nil satisfied-rules) (rand-nth satisfied-rules)
;;      :else (println "need more rules")
;;      )
;;     )

;;   )

;; ;; learning can be at the level of individual gestures like, which gesture is played after which gesture
;; ;; scoreEvents constitute the training set
;; ;; what does style constitute of ?
;; ;; gesture shapes?
;; ;; values of parameters?
;; ;; whatis being the learnt? the rules that were mentioned above?
;; ;; the rule sets, ohhh, which parameter value need to be triggered for which rule-set
;; ;; so, the idea of learning is to induct the rule sets that can be
;; ;; triggerred by an expert system


;; ;; states ->
;; ;; transition between the states
;; ;; if they play a gesture with ahigh-x-value, low-time, high-amplitud,
;; ;;then it will be followed by another gesture with high-x- low y

;; ;; |      | x | y | z | x1| ... |xn|
;; ;; | low  |   |   |   |
;; ;; | med  |   |   |   |
;; ;; | high |   |   |   |

;; ;; second score event is used as the resul
;; ;; learning matrix with n-rows and r-columns, but organized in lists.

;; ;; each gesture contains (list of {:x {:low {:x {:low num, :med num, :high
;; ;; num} :y {:low num, :med num, :high num} :z {:low num, :med num, :high
;; ;; num}}}})

;; ;; {:x {:med {:x  {:low num, :med num, :high num} ...
;; ;; {:x {:high {:x  {:low num, :med num, :high num} ...

;; ;; system needs to know value cut offs for low, med, high for each parameters
;; ;;

;; ;; first x, first value, then the consequent values

;; ;;states function returns the state for each array of the gesture
;; ;;states function returns the state for each array of the gesture


;; (defn learning_markov [scoreEvents matrix low-high-cut-offs ]

;;   (let [
;;         learnt-model (map
;;                (fn [f s]
;;                  (map
;;                   (fn [n] ;;nth row, and a list of dependencies associated
;;                     ;;with that row (like, low -> x,y,z
;;                     ;; learning involves increassing the number of traisl that were positive
;;                     (let [
;;                           row-n-f (map n f) ;;list of elements of the nth element of the gesture
;;                           row-n-s (map n s) ;;;complicated - need to get all dependent parameters
;;                           ]
;;                       (matrix-update m n (states row-n-f) (states row-n-s)) ;;updates
;;                       ;;the
;;                       ;;increment
;;                       ;;counts
;;                       ;;for
;;                       ;;ech
;;                       ;;transition,
;;                       ;;and
;;                       ;;consequently,
;;                       ;;transition
;;                       ;;probablities for the nth row
;;                       )
;;                     )
;;                   (range (count matrix))
;;                   )

;;                  )
;;                scoreEvents (rest scoreEvents))
;;         last_evnt (nth scoreEvents (dec (count scoreEvents))) ;; selects the last event to create a continuation
;;         play (select-from-model learn-model last_evnt) ;how does
;;                                                        ;selection
;;                                                        ;happen? last
;;                                                        ;event could one
;;                                                        ;context that the
;;                                                        ;system uses to
;;                                                        ;generate.
;;         ]
;;     )
;;   )

;; (defn learning_schema []

;;   )

;; ;;initial
;; (list {:x
;;        {:low {:x {:low num, :med num, :high num}  }} ;;empirical learning
;;        {:med {:x {:low num, :med num, :high num}  }}
;;        {:high {:x {:low num, :med num, :high num}  }}
;;        })


;; ;;example1:
;; (list {:x
;;        {:low {:x {:low 1, :med num, :high num}  }} ;;empirical learning
;;        {:med {:x {:low num, :med 1, :high num}  }}
;;        {:high {:x {:low num, :med num, :high num}  }}
;;        })

;; ;;example2:
;; (list {:x
;;        {:low {:x {:low 2, :med num, :high num}  }} ;;empirical learning
;;        {:med {:x {:low num, :med 1, :high 1}  }}
;;        {:high {:x {:low 1, :med num, :high 1}  }}
;;        })

;; ;;example3:
;; (list {:x
;;        {:low {:x {:low 3, :med num, :high num}  }} ;;empirical learning
;;        {:med {:x {:low num, :med 2, :high 1}  }}
;;        {:high {:x {:low 1, :med num, :high 2}  }}
;;        })

;; ;;example4:
;; (list {:x
;;        {:low {:x {:low 3, :med 1, :high num}  }} ;;empirical learning
;;        {:med {:x {:low num, :med 2, :high 1}  }}
;;        {:high {:x {:low 1, :med num, :high 2}  }}
;;        })

;; ;;example4:
;; (list {:x
;;        {:low {:x {:low 3, :med 2, :high num}  }} ;;empirical learning
;;        {:med {:x {:low num, :med 2, :high 1}  }}
;;        {:high {:x {:low 1, :med num, :high 2}  }}
;;        })

;; ;;example4:
;; (list {:x
;;        {:low {:x {:low 3, :med 3, :high num}  }} ;;empirical learning
;;        {:med {:x {:low num, :med 2, :high 1}  }}
;;        {:high {:x {:low 1, :med num, :high 2}  }}
;;        })

;; ;;say this is statistically significant

;; ;; what the system does learn is that from state low it goes reliably to
;; ;; state low, state medium to state medium and state high to state high.
;; ;; BUt this was also done by markov models. What is different about this system.
;; ;; This above step equates to empirical learning?

;; ;; :low -> action -> :low
;; ;; :low -> action -> :medium

;; ;; with no additional inpout, the system learns to form a new
;; ;; categorization. and how does it do that.

;; ;;presence of Y in medium zone makes the distinction between the two
;; ;;learning mechanisms.

;; (list {:y
;;        :low  {:x
;;               {:low {:x {:low 3, :med 3, :high num}  }} ;;empirical learning
;;               {:med {:x {:low num, :med 2, :high 1}  }}
;;               {:high {:x {:low 1, :med num, :high 2}  }}
;;               }
;;        ;;reliable context for x
;;        :med  {:x
;;               {:low {:x {:low 0, :med 6, :high num}  }} ;;empirical learning
;;               {:med {:x {:low num, :med 2, :high 1}  }}
;;               {:high {:x {:low 1, :med num, :high 2}  }}
;;               }
;;        })

;; ;; proobme is that, low and high are numbers? low and high are series of values?
;; ;; low and high are an array of values? what is learnt here is indeed a
;; ;; what pattern of numbers in what range lead to what other patterns in which range?
;; ;; there needs to be way to categorie numbers into ranges?


(defn learning_schema []

  )

(set! *main-cli-fn* start)
