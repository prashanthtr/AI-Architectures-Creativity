(ns server.AIagent.analogy
  (:require [server.utilities :as util])
  )

;;contains functions used for the analogy making agent

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
                   (util/assoc-ud g 1 (nth (nth temp (- n ind)) 1) 0 [])
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
                   (util/assoc-ud g 1 (nth g 1) 0 [])
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
       (util/assoc-ud g 1 (nth g 1) 0 [])
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

(defn ^:export analogy-system [scoreEvents]

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
