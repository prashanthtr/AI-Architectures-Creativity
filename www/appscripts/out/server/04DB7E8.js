goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5912__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5913__i = 0, G__5913__a = new Array(arguments.length -  0);
while (G__5913__i < G__5913__a.length) {G__5913__a[G__5913__i] = arguments[G__5913__i + 0]; ++G__5913__i;}
  args = new cljs.core.IndexedSeq(G__5913__a,0);
} 
return G__5912__delegate.call(this,args);};
G__5912.cljs$lang$maxFixedArity = 0;
G__5912.cljs$lang$applyTo = (function (arglist__5914){
var args = cljs.core.seq(arglist__5914);
return G__5912__delegate(args);
});
G__5912.cljs$core$IFn$_invoke$arity$variadic = G__5912__delegate;
return G__5912;
})()
;
});
