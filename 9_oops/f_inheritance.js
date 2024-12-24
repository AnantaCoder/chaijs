class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // calling the parent class constructor its replaces the call function
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const espresso = new Teacher("espresso", "espresso@teacher.com", "123")

espresso.logMe()
const masalaespresso = new User("masalaespresso")

masalaespresso.logMe()

console.log(espresso instanceof User);