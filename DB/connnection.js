const mongoose=require('mongoose')

connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDb connected succesfully with PF server");
}).catch((reason)=>{
     console.log(reason);
     console.log("MogoDb Connection Failed");
})