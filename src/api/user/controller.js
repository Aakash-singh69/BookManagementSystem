const user =require("./model")
const book =require("../book/model")
exports.createUserData= async(req,res)=>{
    console.log("create user data")
    try{
       const usr=new user(req.body)
       console.log(usr)
       const createUser= await usr.save();
       res.status(201).send(createUser)
    }
    catch(error){
        res.status(500).send(error)
    }
}


exports.userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await user.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "User doesn't exists" });
      } else if (user.password !== password) {
        return res.status(401).json({ message: "Incorrect password" });
      } else {
        userLoginFlag = true;
        console.log("User login successful");
      }
      res.status(200).json({ message: "Welcome User" });
    } catch (e) {
      res.status(400).send(e);
    }
  };
  
  exports.userLogout = (req, res) => {
    userLoginFlag = false;
    res.status(200).json({ message: "User logged out!" });
  };
  
  exports.userAddToReadLater = async (req, res) => {
    try {
      const { userName, bookId } = req.params;
      const updatedUser = await user.findOneAndUpdate(
        { userName: userName },
        { $push: { readLater: bookId } },
        {
          new: true,
        }
      );
      res.status(200).send(updatedUser);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  exports.userAddToLiked = async (req, res) => {
    try {
      const { userName, bookId } = req.params;
      const updatedUser = await user.findOneAndUpdate(
        { userName: userName },
        { $push: { liked: bookId } },
        {
          new: true,
        }
      );
      res.status(200).send(updatedUser);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  exports.userAllReadLater = async (req, res) => {
    try {
      const { userName } = req.params;
      const laterBooks = await user.findOne({ userName });
      console.log(laterBooks.readLater);
      res.status(200).send(laterBooks.readLater);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  exports.userAllLiked = async (req, res) => {
    try {
      const  userName  = req.params.userName;
      const likedBooks = await user.findOne({ userName });
      console.log(likedBooks.liked)
      res.status(200).send(likedBooks.liked);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  exports.userGetSpecificBook = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const bok = await book.findById(bookId);
      res.status(200).send(bok);
    } catch (err) {
      res.status(500).send(err);
    }
  }
