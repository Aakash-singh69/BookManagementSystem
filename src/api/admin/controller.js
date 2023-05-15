const admin =require("./model")
const user =require("../user/model")
const book =require("../book/model")

exports.createAdminData= async(req,res)=>{
    console.log("create admin data")
    try{
       const adm=new admin(req.body)
       console.log(adm)
       const createAdmin= await adm.save();
       res.status(201).send(createAdmin)
    }
    catch(error){
        res.status(500).send(error)
    }
}

exports.adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const adm = await admin.findOne({ email });
      if (!adm) {
        return res.status(401).json({ message: "Admin doesn't exists" });
      } else if (adm.password !== password ) {
        return res.status(401).json({ message: "Invalid credentials" });
      } else {
        adminLoginFlag = true;
        console.log("Admin login successful");
      }
      res.status(200).json({ message: "Welcome Admin" });
    } catch (e) {
      res.status(400).send(err);
    }
  };
  
  exports.adminLogout = (req, res) => {
    adminLoginFlag = false;
    res.status(200).json({ message: "Logged out successfuly" });
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const { adminName, userName } = req.params;
      const updatedUser = await user.findOneAndUpdate({ userName }, req.body, {
        new: true,
      });
      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(500).send(err);
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      const { adminName, userName } = req.params;
      const deletedUser = await user.findOneAndDelete({ userName });
      res.status(200).send(deletedUser);
    } catch (error) {
      res.status(500).send(err);
    }
  };
  
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await user.find();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(err);
    }
  };
  
  exports.getAllBooks = async (req, res) => {
    try {
      const books = await book.find();
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send(err);
    }
  };
  exports.updateBook = async (req, res) => {
    try {
      const { adminName, bookId } = req.params;
      const updatedBook = await book.findByIdAndUpdate(bookId, req.body, {
        new: true,
      });
      res.status(200).send(updatedBook);
    } catch (error) {
      res.status(500).send(err);
    }
  };
  
  exports.deleteBook = async (req, res) => {
    try {
      const { adminName, bookId } = req.params;
      const deletedBook = await book.findByIdAndDelete(bookId);
      res.status(200).send(deletedBook);
    } catch (error) {
      res.status(500).send(err);
    }
  };
  
//   exports.createBook = async (req, res) => {
//     try {
//       const { adminName, bookId } = req.params;
//       const book = new book(req.body);
//       await book.save();
//       res.status(201).send(book);
//     } catch (error) {
//       res.status(500).send(err);
//     }
//   };
  
  exports.getSpecificBook = async (req, res) => {
    try {
      const { adminName, bookId } = req.params;
      const book = await book.findById(bookId);
      res.status(200).send(book);
    } catch (err) {
      res.status(500).send(err);
    }
  };
