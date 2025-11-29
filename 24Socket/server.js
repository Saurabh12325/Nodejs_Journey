  const express = require('express')
  const http = require('http')
  const sockeIo = reuire('socket.io')


  const app = express()
  const server = http.createServer(app)

  //initiate socket.io and attach this to the http server
  const io = sockeIo(server)


  app.use(express.static('public'))

  const users = new Set();
  io.on("connection",(Socket)=>{
    console.log('A user is now connnected');

    //handle users when they will join the chat 

    //handle incoming chat message

    //handle user disconnection

  })