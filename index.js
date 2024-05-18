//loads .env file contents into process.env by default 
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router = require('./Routes/routes')
require('./DB/connection')
const middle=require('./Middlewares/jwtMiddleware')

//creating server instance
const pfServer=express()

//configuring cors into server
pfServer.use(cors())


//configuring json conversion on server
pfServer.use(express.json())

//configure routes to server
pfServer.use(router)

//serving uploaded fles to client side
pfServer.use('/uploads',express.static('./uploads'))

const PORT=3000

//calling listen method to implement listen mode for server to run
pfServer.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`);
})

pfServer.get('/',(req,res)=>{
    res.status(200).send("<h1>The get request Hit successfully</h1>")
})