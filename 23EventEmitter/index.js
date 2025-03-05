const express = require('express')
const EventEmitter = require('events')
const app = express()
const event = new EventEmitter() //here the object is created 

let count  = 0
event.on('CountApi',()=>{
    count++;
    console.log('event called',count)
})
app.get("/",(req,res)=>{
    res.send('api called')
    event.emit('CountApi')
})

app.listen(4000)