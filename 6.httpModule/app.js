var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  var query = url.parse(request.url, true).query;
  console.log(url.parse(request.url))
  if (pathname === '/') {
    fs.readFile('index.html', function (error, data) {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      //response.end(data)
      response.end('<h1>' + JSON.stringify(query) + '</h1>')
    })
  } else if (pathname === '/otherpage') {
    fs.readFile('OtherPage.html', function (error, data) {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.end(data)
    })
  }
}).listen(52273, function () {

})