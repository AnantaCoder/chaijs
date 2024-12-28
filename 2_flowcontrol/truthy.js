// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
false == 0

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // output = 5
// val1 = null ?? 10 //output == 10
// val1 = undefined ?? 15 //output - 15
val1 = null ?? 10 ?? 20
console.log(val1) // output 10

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")