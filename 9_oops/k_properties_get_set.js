function User(email, username){
    this._email = email;
    this._username = username;

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const user = new User("Dattebayo","Dattebayo@gmail.com");
console.log(user.email)