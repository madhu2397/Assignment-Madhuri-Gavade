const http = require("http");
const { type } = require("os");
const server = http.createServer (function(req, res) {
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("Success and listening from port 3000");
});
server.listen(3000,'127.0.0.1');
console.log("Success and listening from port 3000");