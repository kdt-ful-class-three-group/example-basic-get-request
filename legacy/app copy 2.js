
const http = require('http');

function makePage(h1Text) {
  const page = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>${h1Text}</h1>
    </body>
  </html>
  `;
  return page;
}
const server = http.createServer(function(request, response) {
  if(request.method === "GET") {
    if(request.url === "/") {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'utf-8; text/html');
      response.end(makePage('공미남'));
    } else {
      function responseUrl(url) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'utf-8; text/html');
        response.end(makePage(url));
      }
      responseUrl(request.url);
    }
  }

  if(request.method === "POST") {

  }


});

server.listen(3000, function() {
  console.log('서버 도는 중 http://localhost:3000');
});