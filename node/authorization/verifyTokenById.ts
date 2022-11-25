import jwt from 'jsonwebtoken';

const verifyTokenById = (userId: string, authorization: string) => {
    const secret = process.env.SECRET as string;
    const decoded = <jwt.JwtPayload>jwt.verify(authorization, secret);

    if(userId !== decoded.id){
       return false;
    }
    return true;
}

export default verifyTokenById;