import { LdapClient } from "@/lib/ldap";

export async function autheticateWithLdap(
    {email , password} :{ email: string , password:string}
    
    ):Promise<any>{
    return new Promise( (resolve , reject) => {
            LdapClient.bind('uid=admin, ou=system','secret',(error, result) => {
                  if(error){
                    //   console.log(error)
                      reject(error)
                  }else{
                    // console.log(result)
                      resolve(result)
                  }
                  
           })
    }) 
}