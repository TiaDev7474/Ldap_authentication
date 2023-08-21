import { autheticateWithLdap } from "../../utils/auth";
import { generateToken } from "../../utils/jwt";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string,
    status: 200 |201| 401,
    token?: string
}

export default async function handler(
    req: NextApiRequest,
    res:NextApiResponse<ResponseData>
) {
    
     const { numberID ,password } = req.body;
    try{
        const response = await autheticateWithLdap({ numberID:"1525", password:"simplepassword"})
        
    }catch(err){
         res.status(401).json({
            message: 'authentication failed',
            status:401,
           
        })
    }
    const token = await generateToken({numberID:1525 , password:"simplepassword"})
    res.status(200).json({
        message: 'successfully authenticated',
        status:201,
        token: token
    })
}