(ns proj.core
  (:require [clojure.browser.repl :as repl]))

;; (repl/connect "http://localhost:9000/repl")

(enable-console-print!)

;;return a javascript object with different attributes
(defn ^:export start []
  (println "Hello world! \n")
  (println "this is the change in the cljs file")
  (js/console.log '(1 2))
  (get 'a {'a 3 'b 4})
  ;;((fn [a] (+ a 2) ) 2)
  )

(set! *main-cli-fn* start)
