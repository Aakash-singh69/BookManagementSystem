const express=require("express")
const router =express.Router();
const book=require("./model");
const { createBookData } = require("./controller");

router.post("/book/addbook",createBookData)

module.exports=router