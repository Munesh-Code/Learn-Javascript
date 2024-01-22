const accountId = 455;
let accountEmail = "Ikshit@gmail.com";
var accountPassword = "4556";
let accountstate;

accountCity = "Jaipur";

// Not Allowed We cannot reassign the const variable
// accountId = 455;

accountEmail = true;
accountPassword = 755;
accountCity = "Delhi";

/*
Prefer not to use var 
beacause of issue in Block Scope and functional Scope
*/

console.log(accountId);
console.table({accountId,accountEmail,accountPassword,accountCity,accountstate});