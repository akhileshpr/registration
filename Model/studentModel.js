const mongoose=require('mongoose')

const studentSchema= new mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
        
    },
    address:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    gender:{
        type:String,
        required:true

    },
    mobile:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true

    },
    dob:{
        type:String,
        required:true

    },
    course:{
        type:String,
        required:true

    }
})
const registration=mongoose.model("registration",studentSchema)
module.exports=registration