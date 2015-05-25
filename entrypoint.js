// entrypoint.js

var express = require("express")
, app = express()
, server = require('http').createServer(app)
, WebSocketServer = require('ws').Server
, wss = new WebSocketServer({server: server})
, fs = require('fs');

var k_portnum = process.argv[2] || 9000;

require("./out/server/goog/bootstrap/nodejs");
a = require("./out/server/proj");
require("./out/server/proj/core");

//var agentPlayer = proj.core;

/////////////////////////////////////////////////
// http.createServer(function (req, res) {     //
//                                             //
//     res.write("it is a" + agentPlayer.d()); //
//     res.end();                              //
//                                             //
// }).listen(9000);                            //
/////////////////////////////////////////////////

app.use(express.static(__dirname + "/"));

    /////////////////////////////////////////////////////////////////////////
    // function(request, response, next) {                                 //
    //     response.writeHead(200, { "Content-Type": "text/javascript" }); //
    //     response.write("it is a" );                                     //
    //     response.end();                                                 //
    //     // The middleware stops here.                                   //
    // });                                                                 //
    /////////////////////////////////////////////////////////////////////////

// a is closure function
a = (function(){
    var i = 0;
    return function(){
        i++;
    }
})();

server.listen(k_portnum);
console.log("Connected and listening on port " + k_portnum);

//module.exports = agentPlayer;
