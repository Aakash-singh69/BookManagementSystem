const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
    userid:{type:Number,max:999,unique:true,require:true},
    name:{type:String,maxlength:128,require:true},
    email:{type:String,maxlength:128,unique:true,require:true,match:/^\S+@\S+\.\S+$/},
    password:{
        type:String,
        required:true
    },
    gender:{type:String,maxlength:6,require:true},
    readLater:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Book'
    }],
    liked:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Book'
    }],
    mobile:{type:Number,maxlength:10,unique:true,require:true},
    
    dob:{type:String,maxlength:20,require:true,match:/^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/}
})

const user =new mongoose.model("userCollections",userSchema)
module.exports=user