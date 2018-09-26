var fs = require('fs');
var http = require('http'); // http 웹 서버와 관련된 모든 기능을 담은 모듈
// server객체 웹 서버를 생성하는데 꼭 필요한 객체
var server = http.createServer(function (request, response) {
  // 응답한다.
  var date = new Date();
  date.setDate(date.getDate() + 7)
  // fs.readFile('HTMLPage.html', function (err, data) {

  // })
  // 응답 헤더 
  // 첫번째 매개변수는 status Code라고 한다.
  response.writeHead(200, {
    'Content-type': 'text/html',
    'Set-Cookie': [
      'breakfast = toast;Expires = ' + date.toUTCString(),
      'dinner = chicken'
    ]
  })
  response.end('<h1>' + request.headers.cookie + '</h1>')
}).listen(52273, function () {
  console.log('server running at ~')
});
// server 객체는 EventEmitter 객체를 기반으로 만들어졌다. 
// EventEmitter는 on으로 핸들러 등록하고 emit 매서드로 이벤트를 발생시킨다.

// request 이벤트 리스너는 별도로 on 메서드를 사용해 지정할 필요 없이 createServer() 메서드의 매개변수로 입력할 수 있다.
// server.on('request', function (code) {
//   console.log('request on')
// })

// server.on('connection', function (code) {
//   console.log('connection on')
// })

// server.on('close', function (code) {
//   console.log('close on')
// })



