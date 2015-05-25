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

(set! *main-cli-fn* start)
