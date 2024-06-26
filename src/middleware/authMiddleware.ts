import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).send('Access Denied');
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
export default authMiddleware;

