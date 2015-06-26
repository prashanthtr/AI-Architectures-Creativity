goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5989__i = 0, G__5989__a = new Array(arguments.length -  0);
while (G__5989__i < G__5989__a.length) {G__5989__a[G__5989__i] = arguments[G__5989__i + 0]; ++G__5989__i;}
  args = new cljs.core.IndexedSeq(G__5989__a,0);
} 
return G__5988__delegate.call(this,args);};
G__5988.cljs$lang$maxFixedArity = 0;
G__5988.cljs$lang$applyTo = (function (arglist__5990){
var args = cljs.core.seq(arglist__5990);
return G__5988__delegate(args);
});
G__5988.cljs$core$IFn$_invoke$arity$variadic = G__5988__delegate;
return G__5988;
})()
;
});
