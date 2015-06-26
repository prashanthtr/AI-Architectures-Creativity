goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6012__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6013__i = 0, G__6013__a = new Array(arguments.length -  0);
while (G__6013__i < G__6013__a.length) {G__6013__a[G__6013__i] = arguments[G__6013__i + 0]; ++G__6013__i;}
  args = new cljs.core.IndexedSeq(G__6013__a,0);
} 
return G__6012__delegate.call(this,args);};
G__6012.cljs$lang$maxFixedArity = 0;
G__6012.cljs$lang$applyTo = (function (arglist__6014){
var args = cljs.core.seq(arglist__6014);
return G__6012__delegate(args);
});
G__6012.cljs$core$IFn$_invoke$arity$variadic = G__6012__delegate;
return G__6012;
})()
;
});
