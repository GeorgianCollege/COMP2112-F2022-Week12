import http from 'http';

let port: number = 3000;

// creating an instance of the server object
let server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello!");
});

server.listen(port, 'localhost', ()=>{
    console.log(`Listening on Port: ${port}`);
});