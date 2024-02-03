const authController = async(req,res) => {
    try {
        return res.status(200).json("Hello World")
    } catch (error) {
        console.log(error)
    }
}

export {authController}