// Compiled by ClojureScript 0.0-3196 {:target :nodejs}
goog.provide('proj.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
proj.core.start = (function proj$core$start(){
return cljs.core.rand_int.call(null,(30));
});
goog.exportSymbol('proj.core.start', proj.core.start);
proj.core.k_max_d = (500);
goog.exportSymbol('proj.core.k_max_d', proj.core.k_max_d);
proj.core.k_min_d = (50);
goog.exportSymbol('proj.core.k_min_d', proj.core.k_min_d);
proj.core.start_t = ((2000) + ((10000) * cljs.core.rand.call(null)));
goog.exportSymbol('proj.core.start_t', proj.core.start_t);
proj.core.end_t = (proj.core.start_t + (proj.core.k_min_d + ((proj.core.k_max_d - proj.core.k_min_d) * cljs.core.rand.call(null))));
goog.exportSymbol('proj.core.end_t', proj.core.end_t);
proj.core.end_y = (proj.core.k_max_d * cljs.core.rand.call(null));
goog.exportSymbol('proj.core.end_y', proj.core.end_y);
proj.core.start_y = (proj.core.k_min_d * cljs.core.rand.call(null));
goog.exportSymbol('proj.core.start_y', proj.core.start_y);
proj.core.d = (function proj$core$d(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [proj.core.start_t,proj.core.start_y,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(proj.core.start_t + ((proj.core.end_t - proj.core.start_t) / (2))),(proj.core.start_y + ((proj.core.end_y - proj.core.start_y) / (2))),(15)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [proj.core.end_t,proj.core.end_y,(0)], null)], null);
});
goog.exportSymbol('proj.core.d', proj.core.d);
cljs.core._STAR_main_cli_fn_STAR_ = proj.core.start;

//# sourceMappingURL=core.js.map