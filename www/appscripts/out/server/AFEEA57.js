goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5934__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5935__i = 0, G__5935__a = new Array(arguments.length -  0);
while (G__5935__i < G__5935__a.length) {G__5935__a[G__5935__i] = arguments[G__5935__i + 0]; ++G__5935__i;}
  args = new cljs.core.IndexedSeq(G__5935__a,0);
} 
return G__5934__delegate.call(this,args);};
G__5934.cljs$lang$maxFixedArity = 0;
G__5934.cljs$lang$applyTo = (function (arglist__5936){
var args = cljs.core.seq(arglist__5936);
return G__5934__delegate(args);
});
G__5934.cljs$core$IFn$_invoke$arity$variadic = G__5934__delegate;
return G__5934;
})()
;
});
