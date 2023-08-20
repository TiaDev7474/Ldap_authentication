
import jwt from 'jsonwebtoken'
import { type } from 'os'

type ArgumentType = {
     numberID: number
     password: string
}
export async function generateToken({numberID, password} : ArgumentType){
     return await jwt.sign(
          {
              numberID:numberID,
              password:password
          
          }, 'JWT_SECRET_FOR_APP',
          {
             expiresIn: '1days'
          }
     )
}