// console.log("Vaishnavi");
const accountId = 14453;
let accountEmail = "vaishnavi@google.com";
var accountPassword = "12345";
accountCity = "Delhi";

// accountId = 2;// not allowed

accountEmail = "vc@123.com";
accountPassword = "1122334455";
accountCity = "Hyderabad";
let accountState;// value is undefined

 console.log(accountId);
 /*
 Prefer not to use var, because of issues in block scope & functional scope
 */
 console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);