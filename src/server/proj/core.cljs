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

(defn combination_creativity [scoreEvents opt]

  (let [
        num_ges (rand-int 10)          ;;selects number of gestures
        time_new_gesture (* 10 (rand)) ;; a random number betwen 0 and 10
        time_split (/ time_new_gesture num_ges) ;;decide how many gestures to split the time between

        ;;for the number of gestuers, use the time to select the number of elements from each gesture
        selected_evnts (map
                        (fn [s]
                          (let [
                                ;; select the arrays in the event that do not exceed the time limit
                                evnt (randnth scoreEvents)
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


(set! *main-cli-fn* start)
