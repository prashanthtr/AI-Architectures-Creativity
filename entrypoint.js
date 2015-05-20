// entrypoint.js
require("./out/server/goog/bootstrap/nodejs");
require("./out/server/proj");
require("./out/server/proj/core");


var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    res.write("it is a" + proj.core.start());
    res.end();

}).listen(9000);


// a is closure function
a = (function(){
    var i = 0;
    return function(){
        i++;
    }
})();
