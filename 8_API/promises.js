// promise represent eventual obj completion
const promise1 = new Promise(function (resolve, reject) {
    // code to be executed
    //async calls -- db calls , cryptography, network
    setTimeout(() => {
        console.log('async task is completed')
        resolve();
    }, 1000);
})
promise1.then(function () {
    console.log("promise consumed ");

})


//without variable
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("async task 2");
        resolve();

    }, 1000);
}).then(() => {
    console.log("promise/async2 consumed 2");
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "chai", email: "ani@example.com" })
    }, 1000);
})
promise3.then((user) => {
    console.log((user));

})


const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "anantacoder", password: "ani@example.com" })
        } else {
            reject("error, something went wrong ");
        }
    }, 1000);
})
promise4.then(function (user) {
    console.log(user);
    return user.username;

}).then(username => {
    console.log(username);

}).catch(function (error) {
    console.log(error);

}).finally(()=>{
    console.log("🏆finally executed , the promise is either resolve or rejected ");
})


const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123456789" })
        } else {
            reject("error, JS promise went wrong!");
        }
    }, 1000);
});

// method 2 for writing code,   promise , async and await typre
async function consumePromiseFive(){
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



fetch('https://api.github.com/users/anantacoder')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// read it on web

// filter map vdo 30 is due on series