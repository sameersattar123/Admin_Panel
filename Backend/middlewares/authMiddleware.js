import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
 // console.log("token  ", token);

  if (!token) {
    return res
      .staus(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  const jwtToken = token.replace("Bearer ", "");
  // console.log("jwtToken " , jwtToken)

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_TOKEN_SECRET);
    // console.log("isVerified ", isVerified)

    const userData = await User.findOne({ email: isVerified.email }).select(
      "-password"
    );
    // console.log(userData)

    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

export { authMiddleware };
