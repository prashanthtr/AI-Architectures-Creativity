goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6188__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6189__i = 0, G__6189__a = new Array(arguments.length -  0);
while (G__6189__i < G__6189__a.length) {G__6189__a[G__6189__i] = arguments[G__6189__i + 0]; ++G__6189__i;}
  args = new cljs.core.IndexedSeq(G__6189__a,0);
} 
return G__6188__delegate.call(this,args);};
G__6188.cljs$lang$maxFixedArity = 0;
G__6188.cljs$lang$applyTo = (function (arglist__6190){
var args = cljs.core.seq(arglist__6190);
return G__6188__delegate(args);
});
G__6188.cljs$core$IFn$_invoke$arity$variadic = G__6188__delegate;
return G__6188;
})()
;
});
