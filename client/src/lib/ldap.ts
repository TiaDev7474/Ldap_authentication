import  ldap  from 'ldapjs'

export const LdapClient = ldap.createClient({
     url:'ldap://localhost:10389',
     reconnect:true
})

LdapClient.on('error',(err) =>{
     console.log(err.code)
})