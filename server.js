const express=require('express')
const socketio=require('socket.io')
const mongoose=require('mongoose')
const puerto=process.env.PORT || 5000
const app=express()

app.use('/login',express.static('login'))

//mongoose database

mongoose.connect('',()=>{
    console.log('Connected to mongoDB database')
})


const server=app.listen(puerto,()=>{
    console.log('Server on port '+puerto)
})


const io=socketio(server)
io.on('connection',(socket)=>{
    console.log(socket.id)
})