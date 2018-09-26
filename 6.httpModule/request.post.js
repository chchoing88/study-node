var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
  if (request.method === 'GET') {
    var cookie = request.headers.cookie.split(';').map(function (element) {
      var element = element.split('=');
      return {
        key: element[0],
        value: element[1]
      }
    })

    fs.readFile('HTMLPage.2.html', function (error, data) {
      response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['name = RintIanTta', 'region = seoul']
      })
      response.end(data);
    })

  } else if (request.method === 'POST') {
    request.on('data', function (data) {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.end('<h1>' + JSON.stringify(cookie) + '</h1>')
      response.end(data);

    })
  }
}).listen(52273, function () {

})