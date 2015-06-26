goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6056__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6057__i = 0, G__6057__a = new Array(arguments.length -  0);
while (G__6057__i < G__6057__a.length) {G__6057__a[G__6057__i] = arguments[G__6057__i + 0]; ++G__6057__i;}
  args = new cljs.core.IndexedSeq(G__6057__a,0);
} 
return G__6056__delegate.call(this,args);};
G__6056.cljs$lang$maxFixedArity = 0;
G__6056.cljs$lang$applyTo = (function (arglist__6058){
var args = cljs.core.seq(arglist__6058);
return G__6056__delegate(args);
});
G__6056.cljs$core$IFn$_invoke$arity$variadic = G__6056__delegate;
return G__6056;
})()
;
});
