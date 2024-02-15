const registration=require('../Model/studentModel')
exports.register=async(req,res)=>{
    console.log('inside Register Api');
   const {fName,lName,address,email,gender,mobile,password,dob,course}= req.body
//    console.log(fName);
try{
    const existingUser=await registration.findOne({email})
    console.log(existingUser);
    if(existingUser){
       
       res.status(406).json("email already exist..please login")

    }else{
           const newuser=new registration({
            fName,lName,address,email,gender,mobile,password,dob,course
           })
           console.log(newuser);
           await newuser.save()
       res.status(200).json(newuser)
    }

 }catch(err){
    res.status(401).json(err)
 }
 
}


exports.getAllData=async(req,res)=>{
   console.log("inside home project API");
 
   try{
    
    const homeProjects= await registration.find()
   res.status(200).json(homeProjects)
 
   }catch(err){
     res.status(401).json(err)
 
   }
 }
