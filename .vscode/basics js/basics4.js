const user={
    username : "john",
    price:999,

        welcome:function (){
        console.log(`${this.username}, welcome to the store`); //this used for current context
        }
        
    }
user.welcome()
user.username = "sam"
user.welcome()

//arrow function

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// returns UNDEFINED

function chai(){
    console.log(this)
}
// chai()

// another way of representing function , its explicit
const add=(num1, num2)=>{
    return num1+num2
}
console.log(add(45,45))

// implicit return function , {} thakle return likhte hoy na 
const addTwo = (num1, num2) =>  num1 + num2 // const addTwo = (num1, num2) => ( num1 + num2 )

const addTw = (num1, num2) => ({username: "anirban"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


//------------------------------IIFE----------------------------
(function() {
    // Code here runs immediately
    console.log("This is an IIFE! and the database is connected ");
  })(); //so time global scope pollution occurs so remove global scope pollution

  (() => {
    
    console.log("This is an IIFE!");
  })();
  // semicolon is important in iife
  