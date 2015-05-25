var path = require("path");
try {
    require("source-map-support").install();
} catch(err) {
}
require(path.join(path.resolve("."),"www/appscripts/out/server","goog","bootstrap","nodejs.js"));
require(path.join(path.resolve("."),"www/appscripts/out/server","cljs_deps.js"));
goog.require("proj.core");
goog.require("cljs.nodejscli");
