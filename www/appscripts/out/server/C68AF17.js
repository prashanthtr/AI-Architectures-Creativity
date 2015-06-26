goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5954__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5955__i = 0, G__5955__a = new Array(arguments.length -  0);
while (G__5955__i < G__5955__a.length) {G__5955__a[G__5955__i] = arguments[G__5955__i + 0]; ++G__5955__i;}
  args = new cljs.core.IndexedSeq(G__5955__a,0);
} 
return G__5954__delegate.call(this,args);};
G__5954.cljs$lang$maxFixedArity = 0;
G__5954.cljs$lang$applyTo = (function (arglist__5956){
var args = cljs.core.seq(arglist__5956);
return G__5954__delegate(args);
});
G__5954.cljs$core$IFn$_invoke$arity$variadic = G__5954__delegate;
return G__5954;
})()
;
});
