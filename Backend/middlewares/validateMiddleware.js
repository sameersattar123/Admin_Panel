const validate = (schema) => async(req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody
        next();
    } catch (error) {
        res.status(200).json({message  : "validation Failed"})
    }
}

export default validate

