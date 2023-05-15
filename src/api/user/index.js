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


router.post("/adduser",createUserData)

router.post("/login", userLogin);

router.get("/logout", userLogout);

router.patch("/:userName/add_book_liked/:bookId", userAddToLiked);

router.patch("/:userName/add_book_later/:bookId", userAddToReadLater);

router.get("/:userName/liked-books",userAllLiked)

router.get("/:userName/read-later-books",userAllReadLater)

router.get("/books/:bookId",userGetSpecificBook)

module.exports=router