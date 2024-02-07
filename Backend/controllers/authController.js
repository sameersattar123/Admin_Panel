import { User } from "../model/userModel.js";

const registerController = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, phone } = req.body;

    const userExisted = await User.findOne({ email: email });

    if (userExisted) {
      return res.status(400).json({ message: "User Already Existed" });
    }

    const userCreated = await User.create({ username, email, phone, password});

    res.status(200).json({data : "Registration SuccessFully" , token : await userCreated.generateToken() , userId : userCreated._id.toString() }); 

  } catch (error) {  
    res.status(500).json("Internal Server Error");
  }
};

const loginController = async ( req , res) => {
  try {
      const {email , password} = req.body

      const userExisted = await User.findOne({ email })

      if (!userExisted) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const isPasswordValid = await userExisted.isPasswordCorrect(password)
 
      if(!isPasswordValid){
        return res.status(401).json({ message: "Invalid email or password" });
      }
    
      return res.status(200).json({data : "Login SuccessFully" , token : await userExisted.generateToken() , userId : userExisted._id.toString() }); 


  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
}
export { registerController , loginController };
