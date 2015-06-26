goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6595__i = 0, G__6595__a = new Array(arguments.length -  0);
while (G__6595__i < G__6595__a.length) {G__6595__a[G__6595__i] = arguments[G__6595__i + 0]; ++G__6595__i;}
  args = new cljs.core.IndexedSeq(G__6595__a,0);
} 
return G__6594__delegate.call(this,args);};
G__6594.cljs$lang$maxFixedArity = 0;
G__6594.cljs$lang$applyTo = (function (arglist__6596){
var args = cljs.core.seq(arglist__6596);
return G__6594__delegate(args);
});
G__6594.cljs$core$IFn$_invoke$arity$variadic = G__6594__delegate;
return G__6594;
})()
;
});
