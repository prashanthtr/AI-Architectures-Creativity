goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6034__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6035__i = 0, G__6035__a = new Array(arguments.length -  0);
while (G__6035__i < G__6035__a.length) {G__6035__a[G__6035__i] = arguments[G__6035__i + 0]; ++G__6035__i;}
  args = new cljs.core.IndexedSeq(G__6035__a,0);
} 
return G__6034__delegate.call(this,args);};
G__6034.cljs$lang$maxFixedArity = 0;
G__6034.cljs$lang$applyTo = (function (arglist__6036){
var args = cljs.core.seq(arglist__6036);
return G__6034__delegate(args);
});
G__6034.cljs$core$IFn$_invoke$arity$variadic = G__6034__delegate;
return G__6034;
})()
;
});
