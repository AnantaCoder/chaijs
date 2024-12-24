class User {
    constructor(username){ // constructor of this class.
        this.username = username
    }

    logMe(){ // methods of the class
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const anantacoder = new User("anantacoder")
// console.log(anantacoder.createId())

class Teacher extends User{
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }
}
const Ramlal = new  Teacher("Ramlal","Bengali")
Ramlal.logMe()