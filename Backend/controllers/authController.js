import { User } from "../model/userModel.js";
import bcrypt from "bcryptjs"

const registerController = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, phone } = req.body;

    const userExisted = await User.findOne({ email: email });

    if (userExisted) {
      return res.status(400).json({ message: "User Already Existed" });
    }

    // const saltPassword = 10;
    // const hashPassword = await bcrypt.hash(password , saltPassword)

    const userCreated = await User.create({ username, email, phone, password});

    res.status(200).json({data : userCreated});
  } catch (error) {  
    res.status(500).json("Internal Server Error");
  }
};

export { registerController };
