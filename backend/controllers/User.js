
const jwt = require("jsonwebtoken");
const bcrypt =  require("bcrypt");

const UserModel = require("../models/UserModel")

exports.addUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, email, password: hashedPassword });
  await newUser.save();
  console.log(newUser);
  res.json({ message: "User registered successfully" });

  //res.json(newUser);
}

exports.getUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
}




// exports.addUser = async(req,res)=>{
//      try {
//         const { username, password } = req.body;
//         const user = await UserModel.findOne({ username });

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Optionally, you can exclude sensitive information from the response
//         const sanitizedUser = {
//             _id: user._id,
//             username: user.username,
//             // Add other fields you want to include
//         };

//         return res.json(sanitizedUser);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// }


// exports.getUser = async (req, res) => {
//   const { username, password } = req.body;

//   const user = await UserModel.findOne({ username });

//   if (!user) {
//     return res
//       .status(400)
//       .json({ message: "Username or password is incorrect" });
//   }
//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) {
//     return res
//       .status(400)
//       .json({ message: "Username or password is incorrect" });
//   }
//   const token = jwt.sign({ id: user._id }, "secret");
//   res.json({ token, userID: user._id });
// }



// export const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     jwt.verify(authHeader, "secret", (err) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };

//  export default router;