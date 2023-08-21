import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';
import jwtMiddleware, { NextApiRequestExtend } from "../middleware";
import { getUser } from "../../../utils/user";




export default function handler(req:NextApiRequestExtend, res:NextApiResponse){
    
      jwtMiddleware(req, res, async () => {
        // Access the decoded token from req.user
         const user = req.user
        try{
             const response =  await getUser(1525, user?.password)
             res.status(200).json({ message: 'user successfully retrieved', user: response });
        }catch(err){
             return  res.status(400).json({ message:"An error occurred when retrieving user"})
        } 
    
     });
    

}