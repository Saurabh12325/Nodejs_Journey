  const express = require('express')
  const http = require('http')
  const sockeIo = reuire('socket.io')


  const app = express()
  const server = http.createServer(app)

  //initiate socket.io and attach this to the http server
  const io = sockeIo(server)


  app.use(express.static('public'))