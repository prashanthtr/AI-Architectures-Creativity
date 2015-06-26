goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5926__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5927__i = 0, G__5927__a = new Array(arguments.length -  0);
while (G__5927__i < G__5927__a.length) {G__5927__a[G__5927__i] = arguments[G__5927__i + 0]; ++G__5927__i;}
  args = new cljs.core.IndexedSeq(G__5927__a,0);
} 
return G__5926__delegate.call(this,args);};
G__5926.cljs$lang$maxFixedArity = 0;
G__5926.cljs$lang$applyTo = (function (arglist__5928){
var args = cljs.core.seq(arglist__5928);
return G__5926__delegate(args);
});
G__5926.cljs$core$IFn$_invoke$arity$variadic = G__5926__delegate;
return G__5926;
})()
;
});
