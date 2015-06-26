goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5944__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5945__i = 0, G__5945__a = new Array(arguments.length -  0);
while (G__5945__i < G__5945__a.length) {G__5945__a[G__5945__i] = arguments[G__5945__i + 0]; ++G__5945__i;}
  args = new cljs.core.IndexedSeq(G__5945__a,0);
} 
return G__5944__delegate.call(this,args);};
G__5944.cljs$lang$maxFixedArity = 0;
G__5944.cljs$lang$applyTo = (function (arglist__5946){
var args = cljs.core.seq(arglist__5946);
return G__5944__delegate(args);
});
G__5944.cljs$core$IFn$_invoke$arity$variadic = G__5944__delegate;
return G__5944;
})()
;
});
