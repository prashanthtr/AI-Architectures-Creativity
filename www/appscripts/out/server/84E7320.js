goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5966__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5967__i = 0, G__5967__a = new Array(arguments.length -  0);
while (G__5967__i < G__5967__a.length) {G__5967__a[G__5967__i] = arguments[G__5967__i + 0]; ++G__5967__i;}
  args = new cljs.core.IndexedSeq(G__5967__a,0);
} 
return G__5966__delegate.call(this,args);};
G__5966.cljs$lang$maxFixedArity = 0;
G__5966.cljs$lang$applyTo = (function (arglist__5968){
var args = cljs.core.seq(arglist__5968);
return G__5966__delegate(args);
});
G__5966.cljs$core$IFn$_invoke$arity$variadic = G__5966__delegate;
return G__5966;
})()
;
});
