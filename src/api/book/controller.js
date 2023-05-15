const book =require("./model")
exports.createBookData= async(req,res)=>{
    console.log("create book data")
    try{
       const bk=new book(req.body)
       console.log(bk)
       const createBook= await bk.save();
       res.status(201).send(createBook)
    }
    catch(error){
        res.status(500).send(error)
    }
}
