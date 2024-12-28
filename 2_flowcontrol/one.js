//if 
let userLoggedIN = true
let temperature = 40
//=== compares types and values 
if (temperature <= 50) {
    console.log("Less than 60");
    
}else{
    console.log("Greater than 60");
}
// // console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

let balance = 48
// if(balance<= 30) console.log("Balance is low"), console.log("Balance is high");
console.log(balance<=30? "Balance is low":"Balance is high");


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIN && debitCard && 2!=3){
    console.log("You are allowed");
    
}else{
    console.log("You are too sexy to go");
    
}
// if one is true then
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

