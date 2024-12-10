console.log("This is a JS course by Hitesh")
const accID = 535656121
let accEmail = "anirban@gmail.com";
 acccity = "Siliguri"
console.log(acccity)
let number;
// in js var type is not required 
console.table([accEmail, accID, acccity, number])
// in a tabular format 
// use let and const only bc of block and functional code 

/* Datatypes */
"use strict" //treat all js code as newer version

// alert(9*9) // we are using node js 
// BigInt
/*
number 2 to the power 53

string
boolean
null +> standalone temp
undefined 
symbol => unique
object
*/
console.log(typeof(456))
console.log(typeof("456"))
console.log(typeof(null)) //object

let age = 33
console.log("This is ", typeof(age),"and this is it")
score = "this is a string "
let value = Number(score)
console.log(typeof(value))

// number can convert "33" => 33
// "hbjsdf" => NaN
// true - 1 , false - 0


let isLoggedIn = 1
let boleanis = Boolean(isLoggedIn)
console.log(boleanis) // true

console.log("---------------section 2------------------")
let number_a = 44
let stringnew = String(number_a)
console.log(stringnew) 
console.log(typeof stringnew)
//-------------------------operations-----------------------------------------

let value1 = 44
let value2 =  99
let negValue = -value1
console.log(negValue)
// all arithmetic operations 

console.log("This is an example " + " of string concatenation")
console.log("1"  + 2 +23) // js is boolshit 
console.log(1+23+"78")

console.log(true)

//-=-=-=-=-=-=--=-=-=-=-==-=-==-=-=-==-===-==-=-=-= counter -=-=--=-=-=--=-=-====-==-==-=-=-
let gamecounter = 10
gamecounter++
console.log(gamecounter)

//----------------- conditionals --------------------
console.log("_____________conditionals_______________")
console.log(1<4)

let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
// js is DYNAMICALLY TYPED LANGUAGE a In JavaScript, you don't have to declare the type of a variable when you define it. The type is determined at runtime based on the value assigned to the variable.

// --------------------array ------------------------------------------------
let str = "hi my Name is Raul"
console.log("the length is ",str.length)
console.log(str.toLowerCase())
console.log(str.toUpperCase())
let str1 = "Hello, world!";
console.log(str.startsWith("Hello")); 
console.log(str.endsWith("world!")); 
console.log(str.charAt(1));
console.log(str.indexOf("N")); //substring
console.log(str.lastIndexOf("i")); //last index
console.log(str.includes("world")); // returns false
console.log(str.slice(0, 5)); // hi my

let greetSTR = "Hello, world!, into my world";
console.log(greetSTR.replace("world", "JavaScript")); //replaces world with js
console.log(greetSTR.replaceAll("world", "JavaScript")); //replaces all world with js
console.log(greetSTR.split(',')) // returns output into an array
let namecard = "Anirban";
console.log(`Hello, ${namecard}!`); // Hello, Anirban!

let srt3 = "Hello";
let str4 = "World";
console.log(srt3 + str4)
console.log(srt3.concat(", ", str4)); //  Hello, World

let str5 = "  Hello  ";
console.log(str5.trim()); // Output: Hello

