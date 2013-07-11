var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var array = new Array();
  var buffer = new Buffer(array);
  var fs = require("fs");
  buffer = fs.readFileSync("index.html");
  response.send(buffer.toString());

  //response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
