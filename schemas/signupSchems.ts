import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2 , "Username must be atleast 2 characters")
    .max(18 , "Username must be not more than 18 characters")
    .regex(/^[a-zA-Z0-9_]+$/ , "Username must not contain special characters")


export const signupSchemaValidation = z.object({
    username : usernameValidation,
    email : z.string().email({message : "Invalid email address"}),
    password : z.string().min(7 , {message : "Password must be atleast 7 characters"}).max(20 , {message:"Password must be not more than 20 characters"})
})