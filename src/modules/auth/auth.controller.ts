import { Request, Response } from "express"
import { authSchema } from "./auth.schema"
import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../../middleware/auth.middleware"
import { AuthDto } from "./auth.types"

const validUsername = "admin"
const validPassword = "password123"

export class AuthController {

    login = async(req: Request, res: Response) => {
        const parsedAuth = authSchema.safeParse(req.body)
        if (!parsedAuth.success) {
            return res.status(400).json(parsedAuth.data)
        }
        const credentials: AuthDto = parsedAuth.data;
        if (credentials.username === validUsername && credentials.password === validPassword) {
            try {
                const token = await jwt.sign(parsedAuth.data, SECRET_KEY, { expiresIn: "1h" });
                return res.status(200).json({ token });
            } catch (error) {
                return res.status(400).json({ error: "Error on token generation"})
            }
        }
        return res.status(403).json({ error: "Invalid credentials" })
    }
}