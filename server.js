"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
let port = 3000;
let server = http_1.default.createServer((req, res) => {
    fs_1.default.readFile(__dirname + req.url, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});
server.listen(port, 'localhost', () => {
    console.log(`Listening on Port: ${port}`);
});
//# sourceMappingURL=server.js.map