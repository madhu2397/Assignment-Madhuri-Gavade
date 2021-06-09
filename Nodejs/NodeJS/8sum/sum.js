// var http = require('http');
var moment = require('moment');
// var strftime = require('strftime')
var fs = require('fs');
 
var server = http.createServer((req, res) => {​​​​​​​​
res.writeHead(200, {​​​​​​​​ 'Content-Type': 'text/plain' }​​​​​​​​);
fs.readFile('sum1.txt', 'utf8', (err, data) => {​​​​​​​​
data = data.split("");
console.log(data[0], data[1]);
var sum = parseInt(data[0]) + parseInt(data[1]);
console.log(sum);
res.end("success");
    }​​​​​​​​);
}​​​​​​​​);
 
server.listen(3000, '127.0.0.1');
console.log("server is listening on port 3000");