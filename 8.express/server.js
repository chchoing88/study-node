var express = require('express');
var http = require('http');
var morgan = require('morgan');


var app = express();

// app.use(function (request, response) {
//   // response.writeHead(200, { 'Content-Type': 'text/html' })
//   // response.end('<h1>dfdf</h1>')

//   var name = request.query.name;
//   var region = request.query.region;

//   response.send('<h1>' + name + '-' + region + '</h1>')
// })

app.get('/a', function (request, response) {
  response.send('<a href="/b">goto B</a>')
})

app.get('/b', function (request, response) {
  response.send('<a href="/a">goto a</a>')
})

app.get('/page/:id', function (request, response) {
  var name = request.params.id;

  response.send('<h1>' + name + ' Page</h1>')
})

app.use(express.static(__dirname + '/public'))
app.use(morgan('combined'))
app.use(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.end('<img src="sh_live.png" width="100%" />')
})
app.listen(52273, function () {
  console.log('server running')
})