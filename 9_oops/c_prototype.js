let myHero = ["Thor", "Spiderman"]
let myLover = ["Batman", "Superman"]
let HeroPower={
    "Thor": "Hammer",
    "Spiderman": "Web",

    getSpiderPower:function(){
        console.log(this.Spiderman);
        
    }
}
// Humko niche utar  llenge log,
//  ishq latka rahega pankhe par
// mai uss saksh se thoda age chalta hun,
//  jisska  main picha karna chahta hun

//------------------------------------------------INHERITANCE

const User = {
    name: "anantacoder",
    email: "coder@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
};

const TeachingAssistantSupport={
    makeassignment : "Js assignment",
    fullTime : true,
    __proto__ :TeachingSupport
}
Teacher.__proto__= User;

// modern syntax below
Object.setPrototypeOf(TeachingSupport,Teacher)
let newUserName = "kallu kalia";

String.prototype.trueLength= function(){
    console.log(`Name is : ${this}`);
    console.log(`The name length is ${this.length}`);
    
}
newUserName.trueLength()
"Anirban Sarkar".trueLength()