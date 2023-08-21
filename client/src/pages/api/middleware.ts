import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';


export interface NextApiRequestExtend extends NextApiRequest{
     user : JwtPayload
}


export default function jwtMiddleware(
  req: NextApiRequestExtend,
  res: NextApiResponse,
  next: () => void
) {
//   // Get the JWT token from the request headers or query parameters
//   const token = req.headers.authorization?.replace('Bearer ', '') || '';
     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJudW1iZXJJRCI6MTUyNSwicGFzc3dvcmQiOiJzaW1wbGVwYXNzd29yZCIsImlhdCI6MTY5MjYxMTE3NSwiZXhwIjoxNjkyNjk3NTc1fQ.fU1UGug8JHA9tiGStWbrcFtedpZzAXq2NDhLXAmMd-c"
//   // Check if a token exists
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

  try {
    // // Verify and decode the JWT token
    const decodedToken = jwt.verify(token, 'JWT_SECRET_FOR_APP'); 
    // Attach the decoded token to the request object for further use
    req.user = decodedToken as JwtPayload;
    // Continue to the next middleware or API route
    next();
  } catch (error) {
    // Token verification failed
    return res.status(401).json({ message: 'Unauthorized' });
  }
}
