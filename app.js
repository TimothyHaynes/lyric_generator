var ex = require('./lyrics.js');
var express = require('express');
var app = express();

app.get('/api/hello', function(req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
// var selection = Math.floor(Math.random() * ex.length);
//
// http.createServer(function(request, response) {
//     response.writeHead(200, {
//         "Content-type": "text/plain"
//     });
//     response.write(ex[selection]);
//     response.end();
// }).listen(8888);
