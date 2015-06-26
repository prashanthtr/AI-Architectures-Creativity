goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6198__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6199__i = 0, G__6199__a = new Array(arguments.length -  0);
while (G__6199__i < G__6199__a.length) {G__6199__a[G__6199__i] = arguments[G__6199__i + 0]; ++G__6199__i;}
  args = new cljs.core.IndexedSeq(G__6199__a,0);
} 
return G__6198__delegate.call(this,args);};
G__6198.cljs$lang$maxFixedArity = 0;
G__6198.cljs$lang$applyTo = (function (arglist__6200){
var args = cljs.core.seq(arglist__6200);
return G__6198__delegate(args);
});
G__6198.cljs$core$IFn$_invoke$arity$variadic = G__6198__delegate;
return G__6198;
})()
;
});
