const express=require("express")
const router =express.Router();
const user=require("./model");
const { createUserData,userLogin,userAddToLiked,
    userAddToReadLater,
    userGetSpecificBook,
    userLogout,
    userAllLiked,
    userAllReadLater } = require("./controller");

router.get("/user",(req,res)=>{
    res.send("User Home")
})


router.post("/user/adduser",createUserData)

router.post("/user/login", userLogin);

router.get("/user/logout", userLogout);

router.patch("/user/:userName/add_book_liked/:bookId", userAddToLiked);

router.patch("/user/:userName/add_book_later/:bookId", userAddToReadLater);

router.get("/user/:userName/liked-books",userAllLiked)

router.get("/user/:userName/read-later-books",userAllReadLater)

router.get("/user/:bookId",userGetSpecificBook)

module.exports=router