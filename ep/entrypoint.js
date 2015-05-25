// entrypoint.js
require("nodejs");
require("proj");
require("core");


var http = require('http');
var fs = require('fs');

var agentPlayer = proj.core;

http.createServer(function (req, res) {

    res.write("it is a" + agentPlayer.d());
    res.end();

}).listen(9000);


// a is closure function
a = (function(){
    var i = 0;
    return function(){
        i++;
    }
})();

module.exports = agentPlayer;
