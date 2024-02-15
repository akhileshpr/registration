require('dotenv').config()
require('./DB/connnection')

const express=require('express')
const cors=require('cors')
const router=require('./Routes/route')
const regServer=express()
regServer.use(cors())
regServer.use(express.json())  //application specific middleware
regServer.use(router)
const PORT=3001 || process.env.PORT
regServer.listen(PORT,()=>{
    console.log(`server run at port ${PORT}`);
})
regServer.get('/',(req,res)=>{
    res.send("<h1 style=color:red>project fair server started and waiting for client request</h1>")
})

