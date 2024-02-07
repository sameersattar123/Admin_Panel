import {z} from "zod"

const signupSchema = z.object({
    username : z
    .string({required_error : "Name is required"})
    .trim()
    .min(3 , {message : "Name must be at least of 3 chars"})
    .max(255 , {message : "Name must not be more than 255 chars"}),
    email : z
    .string({required_error : "Email is required"})
    .trim()
    .email({ message : "Invalid Email address"})
    .min(3 , {message : "Email must be at least of 3 chars"})
    .max(255 , {message : "Email must not be more than 255 chars"}),
    password : z
    .string({required_error : "password is required"})
    .min(7 , {message : "Password must be at least of 7 chars"})
    .max(1024 , {message : "Password must not be more than 1024 chars"}),
    phone : z
    .string({required_error : "phone number is required"})
    .trim()
    .min(10 , {message : "phone must be at least of 10 chars"})
    .max(20 , {message : "phone must not be more than 20 chars"}),
})

export default signupSchema