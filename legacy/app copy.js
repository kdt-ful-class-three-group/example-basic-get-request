
const http = require('http');

const server = http.createServer(function(request, response) {
  if(request.method === "GET") {
    if(request.url === "/") {
      const page = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>안녕?</h1>
        </body>
      </html>
      `;
      response.statusCode = 200;
      response.setHeader('Content-Type', 'utf-8; text/html');
      response.end(page);

    }
    if(request.url === "/abc") {

    }

  }

  if(request.method === "POST") {

  }


});

server.listen(3000, function() {
  console.log('서버 도는 중 http://localhost:3000');
});