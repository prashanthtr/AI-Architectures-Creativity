goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6574__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6575__i = 0, G__6575__a = new Array(arguments.length -  0);
while (G__6575__i < G__6575__a.length) {G__6575__a[G__6575__i] = arguments[G__6575__i + 0]; ++G__6575__i;}
  args = new cljs.core.IndexedSeq(G__6575__a,0);
} 
return G__6574__delegate.call(this,args);};
G__6574.cljs$lang$maxFixedArity = 0;
G__6574.cljs$lang$applyTo = (function (arglist__6576){
var args = cljs.core.seq(arglist__6576);
return G__6574__delegate(args);
});
G__6574.cljs$core$IFn$_invoke$arity$variadic = G__6574__delegate;
return G__6574;
})()
;
});
