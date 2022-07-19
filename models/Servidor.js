import express from 'express';
import http from 'http'
import {Server} from 'socket.io'
import Socket from './Socket.js';


class Servidor{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io = new Server(this.server)
    }

    configSocket(){
        new Socket(this.io)
    }

    initServer(){
        this.server.listen(this.port, () => {
            console.log(`Server is running in port: ${this.port}`)
        })
        this.configSocket();
    }
}

export default Servidor;