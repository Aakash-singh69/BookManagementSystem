const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/BookManagementSystem')
.then(()=>{
    console.log("mongo db connected successfully")
})
.catch((err)=>{
    console.log("mongo db connection failed",err);
})