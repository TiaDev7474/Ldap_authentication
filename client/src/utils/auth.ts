import { LdapClient } from "@/lib/ldap";

export async function autheticateWithLdap(
    {numberID , password} :{ numberID: string , password:string}
    
    ):Promise<any>{
    return new Promise( (resolve , reject) => {
              LdapClient.bind(`uid=${numberID},ou=L2,o=student,dc=eni,dc=univ,dc=mg`,password,(error, result) => {
                    if(error){
                         console.log(error.code)
                         reject(error)
                         LdapClient.unbind()
                    }else{
                        console.log(result.code)
                        resolve({
                            matricule: numberID
                        })
                    }      
            })
    }) 
}

