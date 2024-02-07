import { Contact } from "../model/contactModel.js";

const contactController = async (req,res) => {
    try {
        const response = req.body
        // console.log(req.body)

        const contact = await Contact.create(response)
        return res.status(200).json({message :  "message send successfully"})
        
    } catch (error) {
       return res.status(500).json({ message :  "message not deleivered"})
        
    }
}

export default contactController