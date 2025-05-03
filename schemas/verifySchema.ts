import {z} from 'zod'

export const verifySchemaValidation = z.object({
    code : z.string().length(6 , {message : "Verfification must be atleast 6 digits"})
})