import { z } from 'zod'

export const authSchema = z.object({
    username: z.string().nonoptional(),
    password: z.string().nonoptional()
})