// promises can have two outputs
// 1. fulfilled - when the task is completed successfully
// 2. rejected - when the task is failed

// lets say I promise something today so there are two possible outcomes. First that I will complete my promise and second that I will not complete my promise. 
// If I complete my promise, so I will be in Resolved state and if I do not complete my promise, so I will be in Rejected state.

// and we can save the state of promise in a variable. But until the promise is completed, we cannot access the value of the promise/ it will be in pending state.

// new Promise((resolve, reject) => {
//     if (true) {
//         return resolve("Promise is resolved");
//     } else {
//         return reject("Promise is rejected");
//     }
// }).then((result) => {
//     // handle success
//     console.log(result);
// }).catch((error) => {
//     // handle error
//     console.log(error);
// });

// if state is resolved then .then() will be executed
// if state is rejected then .catch() will be executed


// user will ask for a number between 0 to 9. if the number is below 5 then the promise is resolved and if the number is above 5 then the promise is rejected.

var ans = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10);
    console.log("Number is: " + num);
    if (num < 5) {
        resolve("Promise is resolved");
    } else {
        reject("Promise is rejected");
    }
});

ans.then(() => {
    console.log("Promise is resolved");
}).catch(() => {
    console.log("Promise is rejected");
});