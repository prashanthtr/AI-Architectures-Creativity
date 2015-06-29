(ns server.AIagent.self-watching
  (:require [server.utilities :as util]
            [server.AIagent.analogy :as ana]
            )
    )


;; self-watching, is to observe analogies being formed, and whether same
;; analogies are formed.

(defn ^:export self-watching [scoreEvents op op-identify-fn op-apply-fn it answer]
  (cond
   (nil? answer) ;;first time
   (self-watching scoreEvents op op-identify-fn op-apply-fn (dec it)
                  (ana/analogy-making scoreEvents op op-identify-fn op-apply-fn)
                  ) ;;to get an answer

   :else
   (let [
         ans (ana/analogy-making scoreEvents op op-identify-fn op-apply-fn)  ;;find a new answer
         ]
     (cond
      (and (= answer ans) (> it 0))
      (self-watching scoreEvents op op-identify-fn op-apply-fn (dec it) ans)

      (and (not= answer ans) (> it 0))
      (self-watching scoreEvents op op-identify-fn op-apply-fn (dec it) ans)

      ;; (do
      ;;   ;;(println "new soln" it "is" (get ans 'outp) )
      ;;   )

      :else (ana/analogy-making scoreEvents op op-identify-fn op-apply-fn answer)

      ;; (do
      ;;         ;;(println "definitely produce new solution compared to last" answer)

      ;;         ;;(get  'outp)

      ;;         )
      )

     )

   )

  )

(defn  ^:export self-watching-system [scoreEvents]

  (let [
        op '(id retro)
        op-identify-fn {'id ana/identify-id, 'retro ana/identify-retro }
        op-apply-fn {'id ana/apply-id, 'retro ana/apply-retro 'none ana/apply-std}
        ans (self-watching scoreEvents op op-identify-fn op-apply-fn 5 {})
        result (get ans 'outp)
        ]
    (into [] result)
    )
  )
