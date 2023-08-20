import  ldap  from 'ldapjs'

export const LdapClient = ldap.createClient({
     url:'ldap://192.168.43.123:1389'
})