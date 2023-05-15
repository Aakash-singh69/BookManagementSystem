const mongoose= require('mongoose');

const bookSchema=new mongoose.Schema({
    bookid:{type:Number,max:999,unique:true,require:true},
    name:{type:String,maxlength:128,require:true},
    author: {
        type: String,
        required: true,
      },
    yearOfPublication:{type:Number,maxlength:4,require:true}
})

const book =new mongoose.model("bookCollections",bookSchema)
module.exports=book