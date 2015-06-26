goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6342__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6343__i = 0, G__6343__a = new Array(arguments.length -  0);
while (G__6343__i < G__6343__a.length) {G__6343__a[G__6343__i] = arguments[G__6343__i + 0]; ++G__6343__i;}
  args = new cljs.core.IndexedSeq(G__6343__a,0);
} 
return G__6342__delegate.call(this,args);};
G__6342.cljs$lang$maxFixedArity = 0;
G__6342.cljs$lang$applyTo = (function (arglist__6344){
var args = cljs.core.seq(arglist__6344);
return G__6342__delegate(args);
});
G__6342.cljs$core$IFn$_invoke$arity$variadic = G__6342__delegate;
return G__6342;
})()
;
});
