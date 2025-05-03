import {z} from 'zod'

export const messageSchemaValidation = z.object({
    content : z
        .string()
        .min(10 , {message : "The message should be atleast 10 characters"})
        .max(300 , {message : "The message should not be more than 300 characters"})
})