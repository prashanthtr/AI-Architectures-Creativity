//what does an agent player need It needs the decision making algorithmm
// which is provided through another file agentObj. What does agent obj
// need, nothing. it is an independet decision making module.

define(
    ["comm", "soundbank", "scoreEvents/scoreEvent","require"],
    function (comm, soundbank, generalScoreEvent, require) {

        //console.log(proj.core);
        //ajax request to /generate route that I have created

        //agent intelligence module is loaded which is the clojure
        //file. Using the clojure file, each aspect of the agent object
        //is loaded without distturbing this original format.  so the
        //intelligence part is merely another file with necessary
        //functions loaded into the agentPlayer file.

        var update_score = {};

        var theCanvas = document.getElementById("score");

        var k_max_d = proj.core.k_max_d; // 5000 ; //ms
        var k_min_d = proj.core.k_max_d; //50;
        var k_max_y = theCanvas.height;

        var m_g_start_t;
        var m_g_end_t;
        var m_g_start_y;
        var m_g_end_y;

        var m_soundSelector;
        debugger;

        // global to all agents
        // tso is "time since origin" - the time value of the "now" line when the method is called
        function makeGesture(tso){
            var m_gesture=generalScoreEvent("mouseContourGesture");

            /*
            // get the starting and ending time value
            m_g_start_t = 2000+10000*Math.random(); // from 10 to 12 seconds into the future
            m_g_end_t = m_g_start_t + k_min_d + (k_max_d-k_min_d)*Math.random();
            // get the starting and ending y value
            m_g_start_y = k_max_y*Math.random();
            m_g_end_y = k_max_y*Math.random();

            //CREATE THE GESTURE [[t,y,z],[t,y,z],[t,y,z], ...]
            m_gesture.d=[[tso+m_g_start_t,m_g_start_y,0],[tso+(m_g_start_t+m_g_end_t)/2,(m_g_start_y+m_g_end_y)/2,15],[tso+m_g_end_t,m_g_end_y,0]]; //, ];

             // third param is the same as provided by the slider on the
             // interface
             */

            m_g_start_t = proj.core.start_t; // from 10 to 12 seconds into the future
            m_g_end_t = proj.core.end_t;
            // get the starting and ending y value
            m_g_start_y = proj.core.start_y; //; k_max_y*Math.random();
            m_g_end_y = proj.core.end_y; //k_max_y*Math.random();

            // cons objec is organized as:

            function inter_cons(a,arr){
                if(a.s.rest.s == null){ //terminating
                    arr.push(a.s.first);
                    return arr;
                }
                else
                {
                    arr.push(a.s.first);
                    inter_cons(a.s.rest,arr);
                }
                return arr;
            }

            // CREATE THE GESTURE [[t,y,z],[t,y,z],[t,y,z], ...]
            // interpret lists
            // obj here is obj.s
            // function inter_lists(obj, rest_obj, arr, new_arr){
            //     //console.log(arr[arr.length - 1]);
            //     if (rest_obj.rest == null){
            //         if (obj.rest == null) {
            //             //console.log("going to return");
            //             arr.push(rest_obj.first);
            //             new_arr.push(arr);
            //             return new_arr;
            //         }
            //         else {
            //             arr.push(rest_obj.first);
            //             new_arr.push(arr);
            //             f(obj.rest.s,obj.rest.s,[],new_arr);}
            //     }
            //     else{
            //         if (typeof (rest_obj.first) == "object") {
            //             //console.log("print going in");
            //             arr.push(rest_obj.first);
            //             f(obj,rest_obj.rest,arr,new_arr);
            //         }
            //         else { f(obj,rest_obj.s,arr,new_arr); }
            //     }
            //     return new_arr;
            // }


            function inter_vector(obj){
                var new_arr = [];
                for(i=0; i < obj.tail.length; i++){
                    new_arr.push( obj.tail[i].tail);
                }
                return new_arr;
            }

            function inter_vector2(obj){
                return obj.tail;
            }

            //these two functions can be in clojure itself,
            // but additionally, the API will need tso as well
            // during each call to the function
            function timeshift(arr){

                for(i=0; i< arr.length; i++){
                    arr[i][0] = tso + Math.abs(tso - arr[i][0]) + 1000*6;
                }
                return arr;
            }

            //2d sort
            function order_arr (arr){
                for(i=0; i < arr.length; i++){
                    for(j=0; j< arr.length; j++){
                        if( arr[i][0] < arr[j][0] ){
                            temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                }
                return arr;
            }

            var score_data = [];
            for ( i =0; i < update_score.length; i++) score_data.push(update_score[i].d);

            // if( score_data.length == 0){
            //     console.log("Agent is random");
            //     m_gesture.d = inter_vector(proj.core.d(tso),[]);
            // }
            // else{
            //     console.log("combinational creativity")
            //     //update score was updated in the previous tick
            //     var most_recent_gesture = update_score[update_score.length-1];
            //     // okat this a reference, so any changes will reflect
            //     var gestured = inter_cons(proj.core.api_combinational(score_data,most_recent_gesture.d,tso), []);
            //     gestured = timeshift(gestured);
            //     console.log("Gesture combinational is" + gestured);
            //     m_gesture.d = order_arr(gestured);
            // }

            //similarly, these random functions can also be included inside
            // the functional responses of each system.

            if( score_data.length == 0 || score_data.length == 1){
                console.log("Agent is random");
                m_gesture.d = inter_vector(proj.core.d(tso));
            }
            else{
                var most_recent_gesture = update_score[update_score.length-1];
                //m_gesture.d = inter_cons(proj.core.simple_repeat(most_recent_gesture.d,tso), []),[];
                //m_gesture.d = inter_cons(proj.core.tranpose(most_recent_gesture.d,tso), []),[];
                //m_gesture.d = inter_cons(proj.core.rule_inverse(most_recent_gesture.d,tso), []);
                //m_gesture.d = inter_cons(proj.core.rule_harmonize(most_recent_gesture.d,tso),[]);
                debugger;
                //m_gesture.d = proj.core.combinationalAI(score_data);
                //m_gesture.d = proj.core.knobbificationAI(score_data);
                //m_gesture.d = proj.core.combinational_transformation(score_data);
                //m_gesture.d = proj.core.analogyAI(score_data);
                m_gesture.d = proj.core.selfwatchingAI(score_data);

                m_gesture.d = inter_vector(m_gesture.d);
                m_gesture.d = timeshift(m_gesture.d);
                //m_gesture.d = order_arr(m_gesture.d);

            }
            console.log("Gesture array is", m_gesture.d);
            //[[tso+m_g_start_t,m_g_start_y,0],[tso+(m_g_start_t+m_g_end_t)/2,(m_g_start_y+m_g_end_y)/2,15],[tso+m_g_end_t,m_g_end_y,0]]; //, ];

            //fuunction that interpretst the cljs object into js arrays

            // just in case the gesture array is not time ordered
            m_gesture.updateMaxTime();
            m_gesture.updateMinTime();

            m_gesture.s=0;//  myID;
            m_gesture.color="#00FFF0";

            m_gesture.soundbank=soundbank;

                // from the display, selected by the user
            m_gesture.soundName = m_soundSelector.getModelName();
            m_gesture.param1=m_soundSelector.getSelectedParamName(1);
            m_gesture.param2=m_soundSelector.getSelectedParamName(2);


            comm.sendJSONmsg("beginGesture", {"d":m_gesture.d, "type": "mouseContourGesture", "cont": false, "fields": m_gesture.getKeyFields()});
            debugger;
            //console.log("starting gesture at " + m_gesture.d[0][0] + ", " + m_gesture.d[0][1] + ", " + m_gesture.d[0][2]);
            return m_gesture;
        }

        return function (){

            var agent={};

            var m_actInterval=4000;  // make a new gester this often
            var clockTimeOfLastAction=2000;

            agent.tick=function(tso, scoreEvents){

                update_score = scoreEvents;
                console.log("sound event", scoreEvents);
                if (! m_soundSelector) return;  // don't make a gesture if no sound models have been selected yet.
                if ((tso-clockTimeOfLastAction) > m_actInterval){
                    console.log("doing something at time " + tso);
                    scoreEvents.push(makeGesture(tso));
                    clockTimeOfLastAction = tso;
                }
                return;
            }

            agent.reset=function(){
                clockTimeOfLastAction=0;
            }


            agent.setSoundSelector = function(s){
                m_soundSelector=s;
            }

            return agent;
        }
    }
);
