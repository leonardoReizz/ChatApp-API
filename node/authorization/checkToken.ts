import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if(!authorization)
    return res.status(400).json({msg: 'Unauthorized'});

  try {
    const secret = process.env.SECRET as string;
    jwt.verify(authorization, secret);

    next();
  } catch (error) {
    res.status(400).json({msg: 'Invalid token'});
  }
}

export default checkToken;