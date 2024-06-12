const accountId =123444
let accountEmail= "akmklas@gmail.com"
var accountPassword="1234"
accountCity="Kolhapur"// can declare variable this way BUT NOT recoommended
let accountState;//--gives undefined

// accountId=2  //not allowed

accountEmail="asad@sd.com" 
accountPassword="2123123"
accountCity="Bengaluru"

console.log(accountId);

/*
use('const','let')
Perfer not to use 'var' because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
