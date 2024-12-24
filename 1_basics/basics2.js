console.log('This is basics 2')
//------------------- mathematics--------------------------------
const score = 40000
const balance = new Number(100)
/*
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2)) //100.00
*/
const otherNumber = 356.548
/*
console.log(otherNumber.toPrecision(4)) //356.5
console.log(score.toLocaleString()) //40,000
*/
// console.log(Math.abs(-346))
// console.log(Math.round(-34.6))
// console.log(Math.ceil(-34.6))
// console.log(Math.floor(-34.6))
// console.log(Math.min(3,54,56,7,7,9))
// console.log(Math.max(3,54,56,7,7,9))



// console.log(Math.random())
// console.log((Math.random()*10)+1)

const min = 100;
const max = 657;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

//--------------------------------  Dates  ----------------------------

let mydate = new Date() //type object
console.log(mydate.toString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
let specificDate = new Date("2024-12-11T10:00:00");
console.log(specificDate); // Outputs: Wed Dec 11 2024 10:00:00 GMT...

console.log(Math.floor(Date.now()/1000))
console.log(new Date().getDay()); // Equivalent to Date.now()
let date = new Date();
console.log(date.getTimezoneOffset()); // Example: -330 for IST (5 hours 30 minutes ahead of UTC)

/*
new Date().getDay():
Returns the day of the week as a number between 0 (Sunday) and 6 (Saturday).
For example:
0 → Sunday 
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
*/

console.log("______________________________________________________")
/* ----------------------------- Arrays ------------------------------------------*/

// accessed  with index and []
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// in js array copy operations crate shallow copy

console.log(myArr[1]);

//Array methods

myArr.push(6) //last e gie jay
myArr.pop() //poops the last element
console.log(myArr)

// myArr.unshift(9)
// myArr.shift()
/**
  unshift() modifies the original array by adding elements to the beginning.
shift() modifies the original array by removing the first element.- no arguments 
 */
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr); //mainly used for debugging

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
console.log("_-_-_-_-_-_-_")
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][2]);


// const allheros = marvel_heros.concat(marvel_heros)
// console.log(allheros) //joining 2 arrays 

//BEST METHOD to=join
let arr1 = ["Hello", "World"];
let arr2 = ["JavaScript", "is", "fun"];

let result = [...arr1, ...arr2]; //spread method 
console.log(result); // Output: ["Hello", "World", "JavaScript", "is", "fun"]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //fix the array
console.log(real_another_array);

//Intresting

console.log(Array.isArray("anirban"))
console.log(Array.from("anirban"))
console.log(Array.from({name: "anirban"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

