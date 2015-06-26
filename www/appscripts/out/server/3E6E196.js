goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5978__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5979__i = 0, G__5979__a = new Array(arguments.length -  0);
while (G__5979__i < G__5979__a.length) {G__5979__a[G__5979__i] = arguments[G__5979__i + 0]; ++G__5979__i;}
  args = new cljs.core.IndexedSeq(G__5979__a,0);
} 
return G__5978__delegate.call(this,args);};
G__5978.cljs$lang$maxFixedArity = 0;
G__5978.cljs$lang$applyTo = (function (arglist__5980){
var args = cljs.core.seq(arglist__5980);
return G__5978__delegate(args);
});
G__5978.cljs$core$IFn$_invoke$arity$variadic = G__5978__delegate;
return G__5978;
})()
;
});
