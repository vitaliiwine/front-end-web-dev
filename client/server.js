const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello, Node.js server!');
}

const server = http.createServer(requestHandler);

server.listener(port, err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log('server is listening on ${port}')
}