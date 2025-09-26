import { authSchema } from "./auth.schema";
import z from "zod"

export interface Auth {
    username: string,
    password: string
}

export type AuthDto = z.infer<typeof authSchema>;