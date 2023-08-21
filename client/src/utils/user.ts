import { SearchOptions } from "ldapjs";
import { LdapClient } from "../lib/ldap";

export async function getUser(userId, password) {

  return new Promise((resolve, reject) => {

    const users = [] as any;
    console.log(userId)
    const searchOptions: SearchOptions = {
      filter: `(uid=${userId})`,
      scope: 'sub', // 'sub' means search the whole directory
      attributes: ['dn'],
    };

    LdapClient.search('ou=L2,o=student,dc=eni,dc=univ,dc=mg', searchOptions, (searchErr, searchRes) => {
      searchRes.on('searchEntry', (entry:any) => {
        const userAttributes = entry.object; // This contains the user's attributes
        users.push(userAttributes);
      });

      searchRes.on('error', (searchErr) => {
        // Handle the search error here
        console.error('LDAP search error:', searchErr);
        reject(searchErr);
      });

      searchRes.on('end', (result) => {
        // Release the LDAP client connection when done
        LdapClient.unbind();
        if (users.length === 0) {
          resolve(users[0]); // User not found
        } else {
          resolve(users[0]); // User found (assuming uid is unique)
        }
      });
    });
  });
}
