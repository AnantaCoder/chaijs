function set_username(username){
    this.username = username;
    console.log("executed!");
    
}

function create_user(username, email , password){

    set_username.call(this,username) // substitute one obj for another obj, hold the reference .call
    this.email = email
    this.password = password
}

const kaka = new create_user("Anantacoder" , "allal@gmail.com", "234")
console.log(kaka);
