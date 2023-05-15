const book =require("./model")
exports.createBookData= async(req,res)=>{
    console.log("create book data")
    try{
        console.log("Entered")
       const bk=new book(req.body)
       console.log(bk)
       
       const createBook= await bk.save();
       console.log("exit")
       res.status(201).send(createBook)
       
    }
    catch(error){
        res.status(500).send(error)
    }
}

exports.getAllBooks= async(req,res)=>{
    try{
        const bok=await book.find()
        console.log(bok)
        res.status(200).send(bok)
    }
    catch(error){
        res.status(500).send(error)
    }
}
