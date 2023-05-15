const express=require("express")
const router =express.Router();
const admin=require("./model");
const { createAdminData,adminLogin,adminLogout,updateBook,updateUser,deleteBook,deleteUser,getAllBooks,getAllUsers,createBook
} = require("./controller");


router.get("/admin",(req,res)=>{
    res.send("Admin Home")
})

router.post("/admin/addadmin",createAdminData)

router.post("/admin/login", adminLogin);

router.get("/admin/logout", adminLogout);

router.patch("/:adminName/editBook/:bookId", updateBook);

router.delete("/:adminName/deleteBook/:bookId", deleteBook);

router.patch("/:adminName/updateUser/:userName", updateUser);

router.get("/books", getAllBooks);

router.get('/admin/user-list',getAllUsers)

router.delete("/admin/deleteUser/:userName",deleteUser)

module.exports=router

