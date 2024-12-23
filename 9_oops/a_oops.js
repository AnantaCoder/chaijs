const user = { // this is an obj but manual work is much more time consuming 
    username: "Anirban",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
        console.log(this); // Logs the entire `user` object
    }
};

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    };

    return this; // Optional; implicitly done by JavaScript.
}
const userOne = new User("Sam altman", 12, true);  // this new keyword is a constructor func. creating new context, new- creating obj
const userTwo = new User("ChaiAurCode", 11, false);     //creating new obj. 

console.log(userOne.username)
console.log(userTwo.loginCount)
userTwo.greeting() // constructor call
console.log(this) // no value in node 
/**cons */

