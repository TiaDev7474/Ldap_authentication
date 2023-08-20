import { autheticateWithLdap } from "@/utils/auth";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res:NextApiResponse<ResponseData>
) {

     const { email ,password } = {email: "", password: ""};
   
    const response = await autheticateWithLdap({ email , password})
    // console.log(response)
    
    res.status(200).json({message: `Login response ${response} `})
}