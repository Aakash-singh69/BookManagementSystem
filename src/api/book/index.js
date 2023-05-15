const express=require("express")
const router =express.Router();
const book=require("./model");
const { createBookData ,getAllBooks} = require("./controller");

router.post("/book/addbook",createBookData)
router.get("/book/getallbooks", getAllBooks)

module.exports=router