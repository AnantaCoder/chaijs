class User{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;

    }
    encrypt(){
        return `${this.password}bjhsdfa`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const momo = new User("Anirban" , "abc@gmail.com" , "233")
console.log(momo.encrypt());
console.log(momo.changeUsername());


// behind the scene
/*
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const ramlal = new User("ramlal", "ramlal@gmail.com", "123")

console.log(ramlal.encryptPassword());
console.log(ramlal.changeUsername());*/