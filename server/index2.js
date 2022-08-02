const express = require('express');
const app = express();
// var cors = require('cors')
// app.use(cors())

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
  });

  app.use('/app', express.static('../'))


const port = 8080
var userCount = 0;
io.on('connection', (socket) => {
    userCount++;
    socket.emit('userCount', userCount);
    console.log('a user connected', socket.id);
    socket.on('message', (data) => {
        console.log('New Message', data);
        // socket.broadcast.emit('message', data);

      
    })

    //Kur nje person te lidhet, do te njoftojme te tjeret qe  nje perdorues i ri eshte lidhur
    socket.broadcast.emit('new_user', null)

    socket.on('disconnect', () => {
        userCount--;
        console.log('user disconnected');
        socket.broadcast.emit('user_disconnected', null)
    });
  });

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});