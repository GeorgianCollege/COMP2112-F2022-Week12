import http from 'http';
import fs from 'fs';

let port: number = 3000;

// creating an instance of the server object
let server = http.createServer((req, res)=>{
    fs.readFile(__dirname + req.url, (err, data)=>{
        if(err)
        {
            res.writeHead(404); // file not found
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(port, 'localhost', ()=>{
    console.log(`Listening on Port: ${port}`);
});