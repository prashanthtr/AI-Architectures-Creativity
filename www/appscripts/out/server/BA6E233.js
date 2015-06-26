goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5946__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5947__i = 0, G__5947__a = new Array(arguments.length -  0);
while (G__5947__i < G__5947__a.length) {G__5947__a[G__5947__i] = arguments[G__5947__i + 0]; ++G__5947__i;}
  args = new cljs.core.IndexedSeq(G__5947__a,0);
} 
return G__5946__delegate.call(this,args);};
G__5946.cljs$lang$maxFixedArity = 0;
G__5946.cljs$lang$applyTo = (function (arglist__5948){
var args = cljs.core.seq(arglist__5948);
return G__5946__delegate(args);
});
G__5946.cljs$core$IFn$_invoke$arity$variadic = G__5946__delegate;
return G__5946;
})()
;
});
