  const express = require('express')
  const http = require('http')
  const sockeIo = require('socket.io')


  const app = express()
  const server = http.createServer(app)

  //initiate socket.io and attach this to the http server
  const io = sockeIo(server)


  app.use(express.static('public'))

  const users = new Set();
  io.on("connection",(Socket)=>{
    console.log('A user is now connnected');

    //handle users when they will join the chat 
      Socket.on('join', (username)=>{
          users.add(username)
          //broadcast to all clients/users that a new user has joined
          io.emit('userJoined',username)
          //send the updated user list to all clients
          io.emit('userList',Array.from(users))
      });
  
      //handle incoming chat message
  
      //handle user disconnection
  
  })
  const PORT = 3000;
  server.listen(PORT , ()=>{
    console.log("server is now runnig on PORT 3000")
  })