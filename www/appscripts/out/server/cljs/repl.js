// Compiled by ClojureScript 0.0-3196 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6031_6043 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6032_6044 = null;
var count__6033_6045 = (0);
var i__6034_6046 = (0);
while(true){
if((i__6034_6046 < count__6033_6045)){
var f_6047 = cljs.core._nth.call(null,chunk__6032_6044,i__6034_6046);
cljs.core.println.call(null,"  ",f_6047);

var G__6048 = seq__6031_6043;
var G__6049 = chunk__6032_6044;
var G__6050 = count__6033_6045;
var G__6051 = (i__6034_6046 + (1));
seq__6031_6043 = G__6048;
chunk__6032_6044 = G__6049;
count__6033_6045 = G__6050;
i__6034_6046 = G__6051;
continue;
} else {
var temp__4126__auto___6052 = cljs.core.seq.call(null,seq__6031_6043);
if(temp__4126__auto___6052){
var seq__6031_6053__$1 = temp__4126__auto___6052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6031_6053__$1)){
var c__5005__auto___6054 = cljs.core.chunk_first.call(null,seq__6031_6053__$1);
var G__6055 = cljs.core.chunk_rest.call(null,seq__6031_6053__$1);
var G__6056 = c__5005__auto___6054;
var G__6057 = cljs.core.count.call(null,c__5005__auto___6054);
var G__6058 = (0);
seq__6031_6043 = G__6055;
chunk__6032_6044 = G__6056;
count__6033_6045 = G__6057;
i__6034_6046 = G__6058;
continue;
} else {
var f_6059 = cljs.core.first.call(null,seq__6031_6053__$1);
cljs.core.println.call(null,"  ",f_6059);

var G__6060 = cljs.core.next.call(null,seq__6031_6053__$1);
var G__6061 = null;
var G__6062 = (0);
var G__6063 = (0);
seq__6031_6043 = G__6060;
chunk__6032_6044 = G__6061;
count__6033_6045 = G__6062;
i__6034_6046 = G__6063;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4220__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6035 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6036 = null;
var count__6037 = (0);
var i__6038 = (0);
while(true){
if((i__6038 < count__6037)){
var vec__6039 = cljs.core._nth.call(null,chunk__6036,i__6038);
var name = cljs.core.nth.call(null,vec__6039,(0),null);
var map__6040 = cljs.core.nth.call(null,vec__6039,(1),null);
var map__6040__$1 = ((cljs.core.seq_QMARK_.call(null,map__6040))?cljs.core.apply.call(null,cljs.core.hash_map,map__6040):map__6040);
var arglists = cljs.core.get.call(null,map__6040__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__6040__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6064 = seq__6035;
var G__6065 = chunk__6036;
var G__6066 = count__6037;
var G__6067 = (i__6038 + (1));
seq__6035 = G__6064;
chunk__6036 = G__6065;
count__6037 = G__6066;
i__6038 = G__6067;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6035);
if(temp__4126__auto__){
var seq__6035__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6035__$1)){
var c__5005__auto__ = cljs.core.chunk_first.call(null,seq__6035__$1);
var G__6068 = cljs.core.chunk_rest.call(null,seq__6035__$1);
var G__6069 = c__5005__auto__;
var G__6070 = cljs.core.count.call(null,c__5005__auto__);
var G__6071 = (0);
seq__6035 = G__6068;
chunk__6036 = G__6069;
count__6037 = G__6070;
i__6038 = G__6071;
continue;
} else {
var vec__6041 = cljs.core.first.call(null,seq__6035__$1);
var name = cljs.core.nth.call(null,vec__6041,(0),null);
var map__6042 = cljs.core.nth.call(null,vec__6041,(1),null);
var map__6042__$1 = ((cljs.core.seq_QMARK_.call(null,map__6042))?cljs.core.apply.call(null,cljs.core.hash_map,map__6042):map__6042);
var arglists = cljs.core.get.call(null,map__6042__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__6042__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6072 = cljs.core.next.call(null,seq__6035__$1);
var G__6073 = null;
var G__6074 = (0);
var G__6075 = (0);
seq__6035 = G__6072;
chunk__6036 = G__6073;
count__6037 = G__6074;
i__6038 = G__6075;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map