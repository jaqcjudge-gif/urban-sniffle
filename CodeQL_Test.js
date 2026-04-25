// Lets see if CodeQL can locate this bit of bad coding
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const query = url.parse(req.url, true).query;
  // Code injection vulnerability
  eval(query.input);
  res.end("done");
}).listen(8080);
