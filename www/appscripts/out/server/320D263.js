goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6132__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6133__i = 0, G__6133__a = new Array(arguments.length -  0);
while (G__6133__i < G__6133__a.length) {G__6133__a[G__6133__i] = arguments[G__6133__i + 0]; ++G__6133__i;}
  args = new cljs.core.IndexedSeq(G__6133__a,0);
} 
return G__6132__delegate.call(this,args);};
G__6132.cljs$lang$maxFixedArity = 0;
G__6132.cljs$lang$applyTo = (function (arglist__6134){
var args = cljs.core.seq(arglist__6134);
return G__6132__delegate(args);
});
G__6132.cljs$core$IFn$_invoke$arity$variadic = G__6132__delegate;
return G__6132;
})()
;
});
