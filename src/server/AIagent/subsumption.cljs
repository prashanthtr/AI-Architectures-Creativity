(ns server.AIagent.subsumption
  (:require
   [server.utilities :as util]
            )
  )

(def timelapse (atom nil))
(def scoreEvents (atom []))

(defn play []
  (cond
   (empty? @scoreEvents) true
   :else false
   )
  )

(defn adapt []
  (cond
   (< timelapse 10) true
   :else (do
           (set! timelapse 10)
           false
           )
   )
  )

(defn diverge []
  (cond
   (and (< timelapse 20) (> timelapse 10)) true
   :else (
          (set! timelapse 0)
          false
          )
   )
  )


;;selects 12 pitches from 24(like 2 octaves)
(defn rand-gen-pitch []
  (into [] (take 5 (distinct (map (fn [s] (s)) (take 20 (repeat (fn [] (rand-int 24))))))))
  )

(defn rand-gen-loudness []
  (into [] (take 5 (distinct (map (fn [s] (+ 50 (s))) (take 20 (repeat (fn [] (rand-int 67))))))))
  )

(defn rand-gen-time []
  (into [] (sort (take 5 (distinct (map (fn [s] (s)) (take 20 (repeat (fn [] (rand-int 10)))))))))
  )


(defn map-stitch [time-int pitch loudness]

  (into [] (map
   (fn [t p l]
     [t p l]
     )
   time-int pitch loudness))

  )


(defn ^:export combine-parameters [& args]

  (cond
   (= 0 (count args)) (map-stitch
                       (rand-gen-time)
                       (rand-gen-pitch)
                       (rand-gen-loudness)
                       )
   :else
   (let [
         scoreEvent (first args)
         control-settings (second args)
         ]
     (cond
      (= (get control-settings 'diverge) nil) (map-stitch
                                             (map (fn [s] (nth s 0) ) scoreEvent)
                                             (map (fn [s] (nth s 1) ) scoreEvent)
                                             (map (fn [s] (nth s 2) ) scoreEvent)
                                             )
      :else (map-stitch
             (rand-gen-time)
             (rand-gen-pitch)
             (map (fn [s] (nth s 2) ) scoreEvent)
             )
      )
     )

   )

  )


;;returns a function of play/adapt/diverge

(defn ^:export simple-subsumption-system []

  (cond
   (true? (play)) (do (println "play") (combine-parameters))
   (true? (adapt)) (do
                     (println "adapt")
                     (combine-parameters @scoreEvents {'adapt {'t 'i 'pitch 's 'loud 'i} 'diverge 'nil}))
   (true? (diverge)) (combine-parameters @scoreEvents {'adapt nil 'diverge {'t 'i 'pitch 'i 'loud 's}} )
   :else nil
   )

  )


(defn ^:export subsumption-stub [scEvents tlapse]

  (do
   (set! scoreEvents scEvents))
  (do
   (set! timelapse tlapse))
  (into [] (simple-subsumption-system))

  )
