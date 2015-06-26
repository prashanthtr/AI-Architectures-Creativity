goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5982__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5983__i = 0, G__5983__a = new Array(arguments.length -  0);
while (G__5983__i < G__5983__a.length) {G__5983__a[G__5983__i] = arguments[G__5983__i + 0]; ++G__5983__i;}
  args = new cljs.core.IndexedSeq(G__5983__a,0);
} 
return G__5982__delegate.call(this,args);};
G__5982.cljs$lang$maxFixedArity = 0;
G__5982.cljs$lang$applyTo = (function (arglist__5984){
var args = cljs.core.seq(arglist__5984);
return G__5982__delegate(args);
});
G__5982.cljs$core$IFn$_invoke$arity$variadic = G__5982__delegate;
return G__5982;
})()
;
});
