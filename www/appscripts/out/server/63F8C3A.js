goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5970__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5971__i = 0, G__5971__a = new Array(arguments.length -  0);
while (G__5971__i < G__5971__a.length) {G__5971__a[G__5971__i] = arguments[G__5971__i + 0]; ++G__5971__i;}
  args = new cljs.core.IndexedSeq(G__5971__a,0);
} 
return G__5970__delegate.call(this,args);};
G__5970.cljs$lang$maxFixedArity = 0;
G__5970.cljs$lang$applyTo = (function (arglist__5972){
var args = cljs.core.seq(arglist__5972);
return G__5970__delegate(args);
});
G__5970.cljs$core$IFn$_invoke$arity$variadic = G__5970__delegate;
return G__5970;
})()
;
});
