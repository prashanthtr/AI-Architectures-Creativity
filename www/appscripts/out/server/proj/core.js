// Compiled by ClojureScript 0.0-3196 {:target :nodejs}
goog.provide('proj.core');
goog.require('cljs.core');
goog.require('server.AIagent.self_watching');
goog.require('clojure.browser.repl');
goog.require('server.AIagent.analogy');
goog.require('server.AIagent.combination');
goog.require('server.AIagent.knobbification');
goog.require('server.AIagent.subsumption');
goog.require('server.utilities');
cljs.core.enable_console_print_BANG_.call(null);
proj.core.combinationalAI = (function proj$core$combinationalAI(scoreEvents){
return server.AIagent.combination.combinational_parameters.call(null,scoreEvents);
});
goog.exportSymbol('proj.core.combinationalAI', proj.core.combinationalAI);
proj.core.knobbificationAI = (function proj$core$knobbificationAI(scoreEvents){
return server.AIagent.knobbification.knobbification.call(null,scoreEvents);
});
goog.exportSymbol('proj.core.knobbificationAI', proj.core.knobbificationAI);
proj.core.analogyAI = (function proj$core$analogyAI(scoreEvents){
return server.AIagent.analogy.analogy_system.call(null,scoreEvents);
});
goog.exportSymbol('proj.core.analogyAI', proj.core.analogyAI);
proj.core.selfwatchingAI = (function proj$core$selfwatchingAI(scoreEvents){
return server.AIagent.self_watching.self_watching_system.call(null,scoreEvents);
});
goog.exportSymbol('proj.core.selfwatchingAI', proj.core.selfwatchingAI);
proj.core.start = (function proj$core$start(){
return cljs.core.rand_int.call(null,(30));
});
goog.exportSymbol('proj.core.start', proj.core.start);
proj.core.k_max_d = (500);
goog.exportSymbol('proj.core.k_max_d', proj.core.k_max_d);
proj.core.k_min_d = (50);
goog.exportSymbol('proj.core.k_min_d', proj.core.k_min_d);
proj.core.start_t = (function proj$core$start_t(){
return ((2000) + ((10000) * cljs.core.rand.call(null)));
});
goog.exportSymbol('proj.core.start_t', proj.core.start_t);
proj.core.end_t = (function proj$core$end_t(st){
return (st + (4000));
});
goog.exportSymbol('proj.core.end_t', proj.core.end_t);
proj.core.end_y = (function proj$core$end_y(st){
return (st + (st * cljs.core.rand.call(null)));
});
goog.exportSymbol('proj.core.end_y', proj.core.end_y);
proj.core.start_y = (function proj$core$start_y(){
return (80);
});
goog.exportSymbol('proj.core.start_y', proj.core.start_y);
proj.core.d = (function proj$core$d(tso){
var st_t = proj.core.start_t.call(null);
var st_y = proj.core.start_y.call(null);
var ed_t = proj.core.end_t.call(null,st_t);
var ed_y = proj.core.end_y.call(null,st_y);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tso + st_t),st_y,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tso + st_t) + ((ed_t - st_t) / (2))),(st_y + ((ed_y - st_y) / (2))),(15)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tso + ed_t),ed_y,(0)], null)], null);
});
goog.exportSymbol('proj.core.d', proj.core.d);
cljs.core._STAR_main_cli_fn_STAR_ = proj.core.start;

//# sourceMappingURL=core.js.map