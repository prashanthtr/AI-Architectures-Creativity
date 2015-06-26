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
proj.core.sqrt = Math.sqrt;
proj.core.abso = Math.abs;
proj.core.simple_repeat = (function proj$core$simple_repeat(most_recent_gesture,tso){
var t1 = cljs.core.first.call(null,cljs.core.first.call(null,most_recent_gesture));
var common_denom = ((5000) * (cljs.core.rand.call(null) + (1)));
var out = cljs.core.doall.call(null,cljs.core.map.call(null,((function (t1,common_denom){
return (function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tso + (cljs.core.nth.call(null,o,(0)) - cljs.core.nth.call(null,cljs.core.first.call(null,most_recent_gesture),(0)))) + common_denom),cljs.core.nth.call(null,o,(1)),cljs.core.nth.call(null,o,(2))], null);
});})(t1,common_denom))
,most_recent_gesture));
return out;
});
goog.exportSymbol('proj.core.simple_repeat', proj.core.simple_repeat);
proj.core.tranpose = (function proj$core$tranpose(most_recent_gesture,tso){
var t1 = cljs.core.first.call(null,cljs.core.first.call(null,most_recent_gesture));
var common_denom = ((5000) * (cljs.core.rand.call(null) + (1)));
var y_rand = cljs.core.rand_nth.call(null,cljs.core.concat.call(null,cljs.core.range.call(null,(30)),cljs.core.range.call(null,(-30))));
var out = cljs.core.doall.call(null,cljs.core.map.call(null,((function (t1,common_denom,y_rand){
return (function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tso + (cljs.core.nth.call(null,o,(0)) - cljs.core.nth.call(null,cljs.core.first.call(null,most_recent_gesture),(0)))) + common_denom),(y_rand + cljs.core.nth.call(null,o,(1))),cljs.core.nth.call(null,o,(2))], null);
});})(t1,common_denom,y_rand))
,most_recent_gesture));
return out;
});
goog.exportSymbol('proj.core.tranpose', proj.core.tranpose);
proj.core.rule_inverse = (function proj$core$rule_inverse(most_recent_gesture,tso){
var t1 = cljs.core.first.call(null,cljs.core.first.call(null,most_recent_gesture));
var common_denom = ((5000) * (cljs.core.rand.call(null) + (1)));
var y_compl = ((function (t1,common_denom){
return (function (y1){
return ((150) - y1);
});})(t1,common_denom))
;
var out = cljs.core.doall.call(null,cljs.core.map.call(null,((function (t1,common_denom,y_compl){
return (function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((tso + (cljs.core.nth.call(null,o,(0)) - cljs.core.nth.call(null,cljs.core.first.call(null,most_recent_gesture),(0)))) + common_denom),y_compl.call(null,cljs.core.nth.call(null,o,(1))),cljs.core.nth.call(null,o,(2))], null);
});})(t1,common_denom,y_compl))
,most_recent_gesture));
return out;
});
goog.exportSymbol('proj.core.rule_inverse', proj.core.rule_inverse);
proj.core.rule_harmonize = (function proj$core$rule_harmonize(most_recent_gesture,tso){
var t1 = cljs.core.first.call(null,cljs.core.first.call(null,most_recent_gesture));
var common_denom = ((5000) * (cljs.core.rand.call(null) + (1)));
var y_rand = cljs.core.rand_int.call(null,(30));
var harmony_rules = ((function (t1,common_denom,y_rand){
return (function (y1){
if(((y1 >= (0))) && ((y1 < (30)))){
return (y1 + y_rand);
} else {
if(((y1 >= (30))) && ((y1 < (60)))){
return (y1 + y_rand);
} else {
if(((y1 >= (60))) && ((y1 < (120)))){
return (y1 - y_rand);
} else {
return (y1 - y_rand);

}
}
}
});})(t1,common_denom,y_rand))
;
var out = cljs.core.doall.call(null,cljs.core.map.call(null,((function (t1,common_denom,y_rand,harmony_rules){
return (function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,o,(0)),harmony_rules.call(null,cljs.core.nth.call(null,o,(1))),cljs.core.nth.call(null,o,(2))], null);
});})(t1,common_denom,y_rand,harmony_rules))
,most_recent_gesture));
return out;
});
goog.exportSymbol('proj.core.rule_harmonize', proj.core.rule_harmonize);
proj.core.square = (function proj$core$square(x){
return (x * x);
});
goog.exportSymbol('proj.core.square', proj.core.square);
proj.core.well_formedness = (function proj$core$well_formedness(gesture){
var freq = cljs.core.map.call(null,(function (g){
return cljs.core.nth.call(null,g,(1));
}),gesture);
var cnt = cljs.core.count.call(null,cljs.core.distinct.call(null,freq));
if(cljs.core._EQ_.call(null,cnt,cljs.core.count.call(null,gesture))){
return true;
} else {
return null;

}
});
goog.exportSymbol('proj.core.well_formedness', proj.core.well_formedness);
proj.core.assoc_ud = (function proj$core$assoc_ud(vect,ind,new_val,ctr,ret){
if(cljs.core._EQ_.call(null,ctr,(0))){
return proj$core$assoc_ud.call(null,vect,ind,new_val,(ctr + (1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,vect)], null));
} else {
if(cljs.core._EQ_.call(null,ctr,ind)){
return proj$core$assoc_ud.call(null,vect,ind,new_val,(ctr + (1)),cljs.core.conj.call(null,ret,new_val));
} else {
if((ctr < cljs.core.count.call(null,vect))){
return proj$core$assoc_ud.call(null,vect,ind,new_val,(ctr + (1)),cljs.core.conj.call(null,ret,cljs.core.nth.call(null,vect,ctr)));
} else {
return ret;

}
}
}
});
goog.exportSymbol('proj.core.assoc_ud', proj.core.assoc_ud);
proj.core.lazyevl = (function proj$core$lazyevl(vect,ctr,ret){
if(cljs.core._EQ_.call(null,ctr,(0))){
return proj$core$lazyevl.call(null,vect,(ctr + (1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,vect)], null));
} else {
if((ctr < cljs.core.count.call(null,vect))){
return proj$core$lazyevl.call(null,vect,(ctr + (1)),cljs.core.conj.call(null,ret,cljs.core.nth.call(null,vect,ctr)));
} else {
return ret;

}
}
});
goog.exportSymbol('proj.core.lazyevl', proj.core.lazyevl);
proj.core.aesthetic_rule_retro = (function proj$core$aesthetic_rule_retro(oGest,newGest){
var n = (cljs.core.count.call(null,oGest) - (1));
var temp = oGest;
var retro = cljs.core.map_indexed.call(null,((function (n,temp){
return (function (ind,g){
return proj.core.assoc_ud.call(null,g,(1),cljs.core.nth.call(null,cljs.core.nth.call(null,temp,(n - ind)),(1)),(0),cljs.core.PersistentVector.EMPTY);
});})(n,temp))
,oGest);
var retro_seq = cljs.core.map.call(null,((function (n,temp,retro){
return (function (r){
return cljs.core.nth.call(null,r,(1));
});})(n,temp,retro))
,retro);
var new_seq = cljs.core.map.call(null,((function (n,temp,retro,retro_seq){
return (function (r){
return cljs.core.nth.call(null,r,(1));
});})(n,temp,retro,retro_seq))
,newGest);
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,proj.core.abso,cljs.core.map.call(null,cljs.core._,retro_seq,new_seq)));
});
goog.exportSymbol('proj.core.aesthetic_rule_retro', proj.core.aesthetic_rule_retro);
proj.core.combinational_parameters = (function proj$core$combinational_parameters(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return proj.core.combinational_parameters.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});
goog.exportSymbol('proj.core.combinational_parameters', proj.core.combinational_parameters);

proj.core.combinational_parameters.cljs$core$IFn$_invoke$arity$variadic = (function (scoreEvents,args){
var gref = cljs.core.last.call(null,scoreEvents);
var g1 = cljs.core.rand_nth.call(null,scoreEvents);
var g2 = cljs.core.rand_nth.call(null,scoreEvents);
var numParam = cljs.core.count.call(null,cljs.core.first.call(null,gref));
var i = cljs.core.rand_int.call(null,numParam);
var n = (numParam - i);
var newGesure1toI = cljs.core.map.call(null,((function (gref,g1,g2,numParam,i,n){
return (function (parameterI){
return cljs.core.map.call(null,((function (gref,g1,g2,numParam,i,n){
return (function (g11){
return cljs.core.nth.call(null,g11,parameterI);
});})(gref,g1,g2,numParam,i,n))
,g1);
});})(gref,g1,g2,numParam,i,n))
,cljs.core.range.call(null,i));
var newGestureitoN = cljs.core.map.call(null,((function (gref,g1,g2,numParam,i,n,newGesure1toI){
return (function (parameterI){
return cljs.core.map.call(null,((function (gref,g1,g2,numParam,i,n,newGesure1toI){
return (function (g11){
return cljs.core.nth.call(null,g11,parameterI);
});})(gref,g1,g2,numParam,i,n,newGesure1toI))
,g2);
});})(gref,g1,g2,numParam,i,n,newGesure1toI))
,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,i),cljs.core.range.call(null,n)));
var combined = cljs.core.concat.call(null,newGesure1toI,newGestureitoN);
var well_formed = ((cljs.core._EQ_.call(null,true,proj.core.well_formedness.call(null,combined)))?combined:proj.core.combinational_parameters.call(null,scoreEvents)
);
var combined2 = cljs.core.map.call(null,((function (gref,g1,g2,numParam,i,n,newGesure1toI,newGestureitoN,combined,well_formed){
return (function (i__$1){
return cljs.core.map.call(null,((function (gref,g1,g2,numParam,i,n,newGesure1toI,newGestureitoN,combined,well_formed){
return (function (g11){
return cljs.core.nth.call(null,g11,i__$1);
});})(gref,g1,g2,numParam,i,n,newGesure1toI,newGestureitoN,combined,well_formed))
,well_formed);
});})(gref,g1,g2,numParam,i,n,newGesure1toI,newGestureitoN,combined,well_formed))
,cljs.core.range.call(null,numParam));
var aesthetic_score = proj.core.aesthetic_rule_retro.call(null,gref,combined2);
var combined2__$1 = cljs.core.map.call(null,((function (gref,g1,g2,numParam,i,n,newGesure1toI,newGestureitoN,combined,well_formed,combined2,aesthetic_score){
return (function (g){
return proj.core.lazyevl.call(null,g,(0),cljs.core.PersistentVector.EMPTY);
});})(gref,g1,g2,numParam,i,n,newGesure1toI,newGestureitoN,combined,well_formed,combined2,aesthetic_score))
,combined2);
cljs.core.println.call(null,"i is",i,n,aesthetic_score);

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,combined2__$1);
});

proj.core.combinational_parameters.cljs$lang$maxFixedArity = (1);

proj.core.combinational_parameters.cljs$lang$applyTo = (function (seq6398){
var G__6399 = cljs.core.first.call(null,seq6398);
var seq6398__$1 = cljs.core.next.call(null,seq6398);
return proj.core.combinational_parameters.cljs$core$IFn$_invoke$arity$variadic(G__6399,seq6398__$1);
});
cljs.core._STAR_main_cli_fn_STAR_ = proj.core.start;

//# sourceMappingURL=core.js.map