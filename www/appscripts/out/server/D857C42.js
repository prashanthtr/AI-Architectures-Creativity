goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5962__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5963__i = 0, G__5963__a = new Array(arguments.length -  0);
while (G__5963__i < G__5963__a.length) {G__5963__a[G__5963__i] = arguments[G__5963__i + 0]; ++G__5963__i;}
  args = new cljs.core.IndexedSeq(G__5963__a,0);
} 
return G__5962__delegate.call(this,args);};
G__5962.cljs$lang$maxFixedArity = 0;
G__5962.cljs$lang$applyTo = (function (arglist__5964){
var args = cljs.core.seq(arglist__5964);
return G__5962__delegate(args);
});
G__5962.cljs$core$IFn$_invoke$arity$variadic = G__5962__delegate;
return G__5962;
})()
;
});
