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
var g1 = cljs.core.last.call(null,scoreEvents);
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

proj.core.combinational_parameters.cljs$lang$applyTo = (function (seq7057){
var G__7058 = cljs.core.first.call(null,seq7057);
var seq7057__$1 = cljs.core.next.call(null,seq7057);
return proj.core.combinational_parameters.cljs$core$IFn$_invoke$arity$variadic(G__7058,seq7057__$1);
});
proj.core.knobbification_step = (function proj$core$knobbification_step(hi,low,step){
return ((hi - low) / step);
});
goog.exportSymbol('proj.core.knobbification_step', proj.core.knobbification_step);
proj.core.knobbification = (function proj$core$knobbification(scoreEvents){
var g1 = cljs.core.last.call(null,scoreEvents);
var knobbify = cljs.core.map.call(null,((function (g1){
return (function (g){
return proj.core.assoc_ud.call(null,g,(1),(function (){var freq = cljs.core.nth.call(null,g,(1));
var numSteps = cljs.core.rand_nth.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.rand_int.call(null,(5))),cljs.core.rand_int.call(null,(-5))));
return (freq + (numSteps * proj.core.knobbification_step.call(null,(150),(50),(100))));
})(),(0),cljs.core.PersistentVector.EMPTY);
});})(g1))
,g1);
var well_formed = ((cljs.core._EQ_.call(null,true,proj.core.well_formedness.call(null,knobbify)))?knobbify:proj$core$knobbification.call(null,scoreEvents)
);
var aesthetic_score = proj.core.aesthetic_rule_retro.call(null,g1,well_formed);
var result = well_formed;
cljs.core.println.call(null,"i is",aesthetic_score);

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,result);
});
goog.exportSymbol('proj.core.knobbification', proj.core.knobbification);
proj.core.combinational_transformation = (function proj$core$combinational_transformation(scoreEvents){
var g1 = cljs.core.last.call(null,scoreEvents);
var n = (cljs.core.count.call(null,g1) - (1));
var temp = g1;
var retro = cljs.core.map_indexed.call(null,((function (g1,n,temp){
return (function (ind,g){
return proj.core.assoc_ud.call(null,g,(1),cljs.core.nth.call(null,cljs.core.nth.call(null,temp,(n - ind)),(1)),(0),cljs.core.PersistentVector.EMPTY);
});})(g1,n,temp))
,g1);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,retro);
});
goog.exportSymbol('proj.core.combinational_transformation', proj.core.combinational_transformation);
proj.core.identify_id = (function proj$core$identify_id(g1,g2){
if(cljs.core._EQ_.call(null,g1,g2)){
return new cljs.core.Symbol(null,"id","id",252129435,null);
} else {
return null;

}
});
goog.exportSymbol('proj.core.identify_id', proj.core.identify_id);
proj.core.create_retro = (function proj$core$create_retro(g1){
var n = (cljs.core.count.call(null,g1) - (1));
var temp = g1;
var retro = cljs.core.map_indexed.call(null,((function (n,temp){
return (function (ind,g){
return proj.core.assoc_ud.call(null,g,(1),cljs.core.nth.call(null,cljs.core.nth.call(null,temp,(n - ind)),(1)),(0),cljs.core.PersistentVector.EMPTY);
});})(n,temp))
,g1);
return retro;
});
goog.exportSymbol('proj.core.create_retro', proj.core.create_retro);
proj.core.create_id = (function proj$core$create_id(g1){
var n = (cljs.core.count.call(null,g1) - (1));
var temp = g1;
var retro = cljs.core.map_indexed.call(null,((function (n,temp){
return (function (ind,g){
return proj.core.assoc_ud.call(null,g,(1),cljs.core.nth.call(null,g,(1)),(0),cljs.core.PersistentVector.EMPTY);
});})(n,temp))
,g1);
return retro;
});
goog.exportSymbol('proj.core.create_id', proj.core.create_id);
proj.core.identify_retro = (function proj$core$identify_retro(g1,g2){
var retro = proj.core.create_retro.call(null,g1);
if(cljs.core._EQ_.call(null,retro,g2)){
return new cljs.core.Symbol(null,"retro","retro",-1615889023,null);
} else {
return null;

}
});
goog.exportSymbol('proj.core.identify_retro', proj.core.identify_retro);
proj.core.apply_id = (function proj$core$apply_id(g1){
return proj.core.create_id.call(null,g1);
});
goog.exportSymbol('proj.core.apply_id', proj.core.apply_id);
proj.core.apply_retro = (function proj$core$apply_retro(g1){
return proj.core.create_retro.call(null,g1);
});
goog.exportSymbol('proj.core.apply_retro', proj.core.apply_retro);
proj.core.apply_std = (function proj$core$apply_std(g1){
var vect = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(35),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3000),(55),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4000),(45),(6)], null)], null);
return cljs.core.map_indexed.call(null,((function (vect){
return (function (ind,g){
return proj.core.assoc_ud.call(null,g,(1),cljs.core.nth.call(null,g,(1)),(0),cljs.core.PersistentVector.EMPTY);
});})(vect))
,vect);
});
goog.exportSymbol('proj.core.apply_std', proj.core.apply_std);
proj.core.retrieve_fn = (function proj$core$retrieve_fn(op1,op2){
if((cljs.core._EQ_.call(null,op1,null)) && (cljs.core._EQ_.call(null,op2,null))){
return new cljs.core.Symbol(null,"no-match","no-match",-2086286848,null);
} else {
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"op1","op1",1470170834,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"op2","op2",-1719046628,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"op1","op1",1470170834,null),new cljs.core.Symbol(null,"retro","retro",-1615889023,null),new cljs.core.Symbol(null,"op2","op2",-1719046628,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"retro","retro",-1615889023,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"op1","op1",1470170834,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"op2","op2",-1719046628,null),new cljs.core.Symbol(null,"retro","retro",-1615889023,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fn2","fn2",-1259832116,null),new cljs.core.Symbol(null,"retro","retro",-1615889023,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"op1","op1",1470170834,null),new cljs.core.Symbol(null,"retro","retro",-1615889023,null),new cljs.core.Symbol(null,"op2","op2",-1719046628,null),new cljs.core.Symbol(null,"retro","retro",-1615889023,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fn2","fn2",-1259832116,null),new cljs.core.Symbol(null,"retro","retro",-1615889023,null)], null)], true, false),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"op1","op1",1470170834,null),op1,new cljs.core.Symbol(null,"op2","op2",-1719046628,null),op2], null));

}
});
goog.exportSymbol('proj.core.retrieve_fn', proj.core.retrieve_fn);
proj.core.analogy_making = (function proj$core$analogy_making(){
var argseq__5260__auto__ = ((((4) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(4)),(0))):null);
return proj.core.analogy_making.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5260__auto__);
});
goog.exportSymbol('proj.core.analogy_making', proj.core.analogy_making);

proj.core.analogy_making.cljs$core$IFn$_invoke$arity$variadic = (function (scoreEvents,op,op_identify_fn,op_apply_fn,answer){
var cnt = cljs.core.count.call(null,scoreEvents);
var g1 = (((cnt > (2)))?cljs.core.nth.call(null,scoreEvents,(cnt - (2))):cljs.core.nth.call(null,scoreEvents,(cnt - (1)))
);
var g2 = cljs.core.nth.call(null,scoreEvents,(cnt - (1)));
var g3 = cljs.core.last.call(null,scoreEvents);
var op1 = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (cnt,g1,g2,g3){
return (function (operator){
return cljs.core.get.call(null,op_identify_fn,operator).call(null,g1,g2);
});})(cnt,g1,g2,g3))
,op));
var op2 = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (cnt,g1,g2,g3,op1){
return (function (operator){
return cljs.core.get.call(null,op_identify_fn,operator).call(null,g1,g3);
});})(cnt,g1,g2,g3,op1))
,op));
var op1__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,op1),(0)))?null:((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,answer)))?cljs.core.rand_nth.call(null,op1):cljs.core.get.call(null,cljs.core.first.call(null,answer),new cljs.core.Symbol(null,"op1","op1",1470170834,null))
));
var op2__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,op2),(0)))?null:((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,answer)))?cljs.core.rand_nth.call(null,op2):cljs.core.get.call(null,cljs.core.first.call(null,answer),new cljs.core.Symbol(null,"op2","op2",-1719046628,null))
));
var fn_id = ((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,answer)))?(function (){var ans = proj.core.retrieve_fn.call(null,op1__$1,op2__$1);
if(cljs.core._EQ_.call(null,ans,new cljs.core.Symbol(null,"no-match","no-match",-2086286848,null))){
return new cljs.core.Symbol(null,"none","none",-1320967291,null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,ans),(2))){
return cljs.core.get.call(null,ans,cljs.core.rand_nth.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"fn2","fn2",-1259832116,null))));
} else {
return cljs.core.get.call(null,ans,new cljs.core.Symbol(null,"fn1","fn1",895834444,null));

}
}
})():(function (){var ans = proj.core.retrieve_fn.call(null,op1__$1,op2__$1);
var fn_no = cljs.core.get.call(null,cljs.core.first.call(null,answer),new cljs.core.Symbol(null,"ans","ans",640453811,null));
if(cljs.core._EQ_.call(null,ans,new cljs.core.Symbol(null,"no-match","no-match",-2086286848,null))){
return new cljs.core.Symbol(null,"none","none",-1320967291,null);
} else {
if(cljs.core._EQ_.call(null,fn_no,new cljs.core.Symbol(null,"fn1","fn1",895834444,null))){
return cljs.core.get.call(null,ans,new cljs.core.Symbol(null,"fn2","fn2",-1259832116,null));
} else {
return cljs.core.get.call(null,ans,new cljs.core.Symbol(null,"fn1","fn1",895834444,null));

}
}
})()
);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"op1","op1",1470170834,null),op1__$1,new cljs.core.Symbol(null,"op2","op2",-1719046628,null),op2__$1,new cljs.core.Symbol(null,"ans","ans",640453811,null),fn_id,new cljs.core.Symbol(null,"outp","outp",1006335442,null),cljs.core.get.call(null,op_apply_fn,fn_id).call(null,g3)], null);
});

proj.core.analogy_making.cljs$lang$maxFixedArity = (4);

proj.core.analogy_making.cljs$lang$applyTo = (function (seq7059){
var G__7060 = cljs.core.first.call(null,seq7059);
var seq7059__$1 = cljs.core.next.call(null,seq7059);
var G__7061 = cljs.core.first.call(null,seq7059__$1);
var seq7059__$2 = cljs.core.next.call(null,seq7059__$1);
var G__7062 = cljs.core.first.call(null,seq7059__$2);
var seq7059__$3 = cljs.core.next.call(null,seq7059__$2);
var G__7063 = cljs.core.first.call(null,seq7059__$3);
var seq7059__$4 = cljs.core.next.call(null,seq7059__$3);
return proj.core.analogy_making.cljs$core$IFn$_invoke$arity$variadic(G__7060,G__7061,G__7062,G__7063,seq7059__$4);
});
proj.core.analogy_stub = (function proj$core$analogy_stub(scoreEvents){
var op = cljs.core.list(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"retro","retro",-1615889023,null));
var op_identify_fn = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"id","id",252129435,null),proj.core.identify_id,new cljs.core.Symbol(null,"retro","retro",-1615889023,null),proj.core.identify_retro], null);
var op_apply_fn = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"id","id",252129435,null),proj.core.apply_id,new cljs.core.Symbol(null,"retro","retro",-1615889023,null),proj.core.apply_retro,new cljs.core.Symbol(null,"none","none",-1320967291,null),proj.core.apply_std], null);
var ans = proj.core.analogy_making.call(null,scoreEvents,op,op_identify_fn,op_apply_fn);
var result = cljs.core.get.call(null,ans,new cljs.core.Symbol(null,"outp","outp",1006335442,null));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,result);
});
goog.exportSymbol('proj.core.analogy_stub', proj.core.analogy_stub);
proj.core.self_watching = (function proj$core$self_watching(scoreEvents,op,op_identify_fn,op_apply_fn,it,answer){
if((answer == null)){
return proj$core$self_watching.call(null,scoreEvents,op,op_identify_fn,op_apply_fn,(it - (1)),proj.core.analogy_making.call(null,scoreEvents,op,op_identify_fn,op_apply_fn));
} else {
var ans = proj.core.analogy_making.call(null,scoreEvents,op,op_identify_fn,op_apply_fn);
if((cljs.core._EQ_.call(null,answer,ans)) && ((it > (0)))){
return proj$core$self_watching.call(null,scoreEvents,op,op_identify_fn,op_apply_fn,(it - (1)),ans);
} else {
if((cljs.core.not_EQ_.call(null,answer,ans)) && ((it > (0)))){
return proj$core$self_watching.call(null,scoreEvents,op,op_identify_fn,op_apply_fn,(it - (1)),ans);
} else {
return proj.core.analogy_making.call(null,scoreEvents,op,op_identify_fn,op_apply_fn,answer);

}
}

}
});
goog.exportSymbol('proj.core.self_watching', proj.core.self_watching);
proj.core.self_watching_stub = (function proj$core$self_watching_stub(scoreEvents){
var op = cljs.core.list(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"retro","retro",-1615889023,null));
var op_identify_fn = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"id","id",252129435,null),proj.core.identify_id,new cljs.core.Symbol(null,"retro","retro",-1615889023,null),proj.core.identify_retro], null);
var op_apply_fn = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"id","id",252129435,null),proj.core.apply_id,new cljs.core.Symbol(null,"retro","retro",-1615889023,null),proj.core.apply_retro,new cljs.core.Symbol(null,"none","none",-1320967291,null),proj.core.apply_std], null);
var ans = proj.core.self_watching.call(null,scoreEvents,op,op_identify_fn,op_apply_fn,(5),cljs.core.PersistentArrayMap.EMPTY);
var result = cljs.core.get.call(null,ans,new cljs.core.Symbol(null,"outp","outp",1006335442,null));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,result);
});
goog.exportSymbol('proj.core.self_watching_stub', proj.core.self_watching_stub);
cljs.core._STAR_main_cli_fn_STAR_ = proj.core.start;

//# sourceMappingURL=core.js.map