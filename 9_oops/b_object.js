function multiple(num) {
    return num * 5;
}

multiple.power = 3; 
console.log(multiple(4)); 
console.log(multiple.power); // Outputs 3
console.log(multiple.prototype); // Outputs the prototype object (which is empty for regular functions)

// function is also an obj in js 

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// Correctly define `increment` to use function syntax for proper `this` binding
createUser.prototype.increment = function () {
    this.score += 1;
};

// Correct `printMe` to use proper string interpolation and function syntax
createUser.prototype.printMe = function () {
    console.log(`The score is ${this.score}`);
};

const chai = new createUser("Anantacoder", 43); // Creating a new user object
chai.increment(); // Incrementing score by 1
console.log(`The increased score is ${chai.score}`); // Outputs: The increased score is 44
chai.printMe(); // Outputs: The score is 44



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/