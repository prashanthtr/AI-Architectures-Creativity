goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5910__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5911__i = 0, G__5911__a = new Array(arguments.length -  0);
while (G__5911__i < G__5911__a.length) {G__5911__a[G__5911__i] = arguments[G__5911__i + 0]; ++G__5911__i;}
  args = new cljs.core.IndexedSeq(G__5911__a,0);
} 
return G__5910__delegate.call(this,args);};
G__5910.cljs$lang$maxFixedArity = 0;
G__5910.cljs$lang$applyTo = (function (arglist__5912){
var args = cljs.core.seq(arglist__5912);
return G__5910__delegate(args);
});
G__5910.cljs$core$IFn$_invoke$arity$variadic = G__5910__delegate;
return G__5910;
})()
;
});
