const mongoose= require('mongoose');

const adminSchema=new mongoose.Schema({
    adminid:{type:Number,max:999,unique:true,require:true},
    name:{type:String,maxlength:128,require:true},
    gender:{type:String,maxlength:6,require:true},
    mobile:{type:Number,maxlength:10,unique:true,require:true},
    email:{type:String,maxlength:128,unique:true,require:true,match:/^\S+@\S+\.\S+$/},
    password:{
        type:String,
        required:true
    },
    dob:{type:String,maxlength:20,require:true,match:/^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/}
})

const admin =new mongoose.model("adminCollections",adminSchema)
module.exports=admin