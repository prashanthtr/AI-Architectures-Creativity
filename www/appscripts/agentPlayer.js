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

            m_g_start_t = proj.core.start_t; // from 10 to 12 seconds into the future
            m_g_end_t = proj.core.end_t;
            // get the starting and ending y value
            m_g_start_y = proj.core.start_y; //; k_max_y*Math.random();
            m_g_end_y = proj.core.end_y; //k_max_y*Math.random();

            function inter_vector(obj){
                var new_arr = [];
                for(i=0; i < obj.tail.length; i++){
                    new_arr.push( obj.tail[i].tail);
                }
                return new_arr;
            }

            var score_data = [];
            for ( i =0; i < update_score.length; i++) score_data.push(update_score[i].d);

            //m_gesture.d = proj.core.combinationalAI(score_data,tso);
            //m_gesture.d = proj.core.knobbificationAI(score_data,tso);
            //m_gesture.d = proj.core.combinational_transformation(score_data,tso);
            //m_gesture.d = proj.core.selfwatchingAI(score_data,tso);
            //m_gesture.d = proj.core.randomGest(tso);

            //m_gesture.d = proj.core.directComm(score_data,tso);
            //m_gesture.d = proj.core.indirectComm(score_data,tso);

            //small function to convert score data to integers
            debugger;
            var sc_data;
            if( score_data.length != 0){
                sc_data = [score_data[score_data.length-1].map( function (f) { f[1] = parseInt(f[1]); return f;})[0]];
            }
            // doing this to convert any floats to integers
            score_data[score_data.length-1] = sc_data;

            m_gesture.d = proj.core.enactive(score_data,tso);
            //m_gesture.d = [m_gesture.d.tail];
            m_gesture.d = inter_vector(m_gesture.d);

            //m_gesture.d = timeshift(m_gesture.d);
            console.log("Gesture array is", m_gesture.d);

            //fuunction that interpretst the cljs object into js arrays

            // just in case the gesture array is not time ordered
            m_gesture.updateMaxTime();
            m_gesture.updateMinTime();

            m_gesture.s="A";//  myID is 0;
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

        var coImprovModel = (function (my){
            var my = {};
            return function(args){
                my.interaction = args[0];
                my.communication = args[1];
                my.aesthetics = args[2];
                return my;
            }

        })(coImprovModel);

        function turntaking (tso,scoreEvents){

            update_score = scoreEvents;
            console.log("sound event", scoreEvents);
            if (! this.soundSelect) return;  // don't make a gesture if no sound models have been selected yet.

            if( scoreEvents.length == 0 ){
                //make the first move if user is not responding
                scoreEvents.push(makeGesture(tso));
                this.clockTimeOfLastAction = tso;
            }
            else{
                //don't do consecutive gestures
                if( scoreEvents[scoreEvents.length-1].s == "A"  ){
                    this.clockTimeOfLastAction = tso;

                }
                else{
                    //In turn taking, system produces its response 3 seconds
                    //after the user plays.
                    if( (tso - this.clockTimeOfLastAction) > this.actInterval ){
                        scoreEvents.push(makeGesture(tso));
                        this.clockTimeOfLastAction = tso;
                    }
                }
            }
            return;
        }

        //var clockTimeOfLastAction=2000;

        return function (args){

            var agent={};

            agent.actInterval=3000;  // make a new gester this often
            agent.clockTimeOfLastAction=2000;
            agent.soundSelect = null;

            agent.coImprovModel = coImprovModel(args);

            //calls the corresponding interaction model of co-improv
            agent.tick= eval(agent.coImprovModel.interaction);

                // function(tso, scoreEvents){

                // this.interaction(tso,scoreEvents);

                // update_score = scoreEvents;
                // console.log("sound event", scoreEvents);
                // if (! m_soundSelector) return;  // don't make a gesture if no sound models have been selected yet.
                // // if ((tso-this.clockTimeOfLastAction) > agent.actInterval){
                // //     console.log("doing something at time " + tso);
                // //     console.log("actinterval is" + this.actInterval + "clocktime time of last action is" + this.clockTimeOfLastAction);

                // //     debugger;
                // //     if( scoreEvents.length == 0 ){
                // //         scoreEvents.push(makeGesture(tso));
                // //         this.clockTimeOfLastAction = tso;
                // //     }
                // //     if( scoreEvents[scoreEvents.length-1].s == "A"  ){

                // //         return;
                // //     }
                // //     else{
                // //         scoreEvents.push(makeGesture(tso));
                // //         this.clockTimeOfLastAction = tso;
                // //     }

                // // }

                // //only turn taking, there is not time involved here.

                // if( scoreEvents.length == 0 ){
                //     scoreEvents.push(makeGesture(tso));
                //     this.clockTimeOfLastAction = tso;
                //     return;
                //     //make the first move if user is not responding
                // }
                // if( scoreEvents[scoreEvents.length-1].s == "A"  ){
                //     this.clockTimeOfLastAction = tso;
                //     return; //don't do consecutive gestures
                // }
                // else{
                //     if( (tso - this.clockTimeOfLastAction) > this.actInterval ){
                //         scoreEvents.push(makeGesture(tso));
                //         this.clockTimeOfLastAction = tso;
                //     }
                //     else{
                //         return;
                //     }
                // }
                // return;
            // };

            //not sure why this reset function is needed since clocktimeoflastaction is always initialized during the callback
            agent.reset=function(){
                this.clockTimeOfLastAction=0;
            }


            agent.setSoundSelector = function(s){
                m_soundSelector=s;
                this.soundSelect = s;
            }

            return agent;
        };
    }
);
