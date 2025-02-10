const http = require('http');
const fs = require('fs');


const server = http.createServer(function(request, response) {

  if(request.method === "GET") {
    // * 최초 접속 시도
    if(request.url === "/") {
      const page = fs.readFileSync('./public/index.html', "utf-8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'utf-8; text/html');
      response.end(page);
    }
    // * css 파일 요청
    if(request.url === "/index.css") {
      const css = fs.readFileSync('./public/index.css', "utf-8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/css');
      response.end(css);
    }
    // * js 파일 요청
    if(request.url === "/index.js") {
      const js = fs.readFileSync('./public/index.js', "utf-8");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/javascript');
      response.end(js);
    }

    
  }

});

server.listen(3000, function() {
  console.log('서버 도는 중 http://localhost:3000');
});