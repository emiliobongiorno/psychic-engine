import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const SECRET_KEY = "SECRET"

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1] || "";
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        (req as any).user = decoded;
        next()
    } catch {
        return res.status(403).json({ error: "Invalid token"})
    }
}