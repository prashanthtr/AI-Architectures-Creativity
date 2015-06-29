(ns server.AIagent.knobbification
  (:require [server.utilities :as util])
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
                    (util/assoc-ud g 1
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
                     (= true (util/well-formedness knobbify)) knobbify
                     :else (knobbification scoreEvents)
                     )
        aesthetic-score (util/aesthetic-rule-retro g1 well-formed)
        result well-formed
        ]
    (println "i is" aesthetic-score)
    (into [] result)
    )
  )
