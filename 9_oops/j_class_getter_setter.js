class User {
    constructor(email, password) {
        this.email = email; // Calls the setter
        this.password = password; // Calls the setter
    }

    get email() {
        return this._email.toUpperCase(); // Accessing internal property
    }

    set email(value) {
        this._email = value; // Setting internal property
    }

    get password() {
        return `${this._password}NAGASAKI`; // Appending string for demonstration
    }

    set password(value) {
        this._password = value; // Setting internal property
    }
}

const anantacoder = new User("anantacoder@nakamura.ai", "tmc");

console.log(anantacoder.email);

anantacoder.password = "437265"; // Calls the setter

console.log(anantacoder.password); 

/**The "Maximum call stack size exceeded" error in JavaScript occurs when a function calls itself recursively without an exit condition, or when there is an infinite loop of function calls. This error is triggered when the call stack, a structure used to keep track of function calls, grows too large and exceeds the browser's or environment's limit.

 */
function infiniteRecursion() {
    infiniteRecursion(); // No exit condition
}
infiniteRecursion(); // Causes "Maximum call stack size exceeded"
