(ns server.AIagent.combination
  (:require [server.utilities :as util])
  )

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
                     (= true (util/well-formedness combined)) combined
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
        aesthetic-score (util/aesthetic-rule-retro gref combined2)
        combined2 (map
                   (fn [g]
                     (util/lazyevl g 0 [])
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
