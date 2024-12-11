// Basics part 3 

// single ton and lateral 
//different way of use case

// const tinderUser = new Object() 
const tinderUser = {}
tinderUser.id = 546
tinderUser.name="Samy"
tinderUser.isLoggedIN = false

// console.log(tinderUser)


const regularUser = {
    email:"anirban@gmail.com",
    fullname :{
        firstName: "Anirban",
        lastName : "Sarkar"
    }
}
// console.log(regularUser.fullname.firstName)

//combining obj
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"kl", 4:"h"}
const obj3 = {obj1,obj2}
obj4 = Object.assign({},obj1,obj2) //assign(target, source)
//console.log(obj3.obj1[1])
//console.log(obj4)

//obj under an array
let users = [
    { name: "Anirban", age: 22, job: "Student" },
    { name: "John", age: 30, job: "Developer" },
    { name: "Jane", age: 25, job: "Designer" }
  ];
  
  //console.log(users[0].name);  // Output: "Anirban"
  //console.log(users[1].job);   // Output: "Developer"


// Object de-structure and json api

// destructuring
const course = {
    coursename : "js in vs code",
    price : 5789,
    corseconstructir : "Hritesh"
}

const {price:p} = course; //destructuring an object
// console.log(p)

 
/*const navbar=({company}) =>{

}
navbar(company = "Hitesh")*/

//api in json format

//-----------------------------------functions ------------------------------------------------
function greet() { //name(parameter)
    console.log("Good Morning")
    
}

greet()
greet()

//=========================== mini hoisting
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
