// what is sync 
// all the tasks will be executed one after the other. Until the first task is completed, the next task will not be executed.

// what is async 
// all the tasks will be executed independently of each other. The next task can be executed without waiting for the previous task to complete.

// synchronous programming
// In this type of programming each task is executed one after another.
// Javascript is single-threaded, meaning it can only execute one task at a time.
// Javascript is synchronous by default but it can be made asynchronous using callbacks, promises, or async/await.


// what is asynchronous programming?
// In asynchronous programming, tasks can be executed independently of the main program flow.
// This allows the program to continue executing while waiting for tasks to complete, such as network requests.

// Asynchronous programming is often used to handle tasks that take time, such as file I/O, network requests, or timers

// Javascript is asynchronous from ES5 but it majorly relied on setTimeout and callbacks.

// now u might be thinking when to use sync programming and when to use async programming
// if u r working with async/await, setTimeout, setInterval, promises, fetch API call, XMLHTTPRequest, or any other I/O operations, use async programming

// if u r working with simple tasks that do not require waiting for other tasks to complete, use sync programming

// sometimes output of our code depends on the response of server or some other task. the time for these tasks to complete is not known beforehand. In such cases, we use async programming to handle the tasks that take time.


// setTimeout syntax - it takes two arguments, a callback function and a delay in milliseconds
// setTimeout(callback, delay)
console.log("This is executed first");
setTimeout(() => {
  console.log("This is executed after 2 seconds");
    // This code will be executed after 2 seconds
    // this is called callback function
    // the callback function is executed after the delay specified in milliseconds
}, 2000);
console.log("This is executed second");

// there are two stacks in JavaScript
// 1. Main stack - where the main code is executed
// 2. Callback queue - where the callback functions are executed after the main stack is empty

// when the main stack is empty, the callback functions in the callback queue are executed one by one

// the event loop is responsible for checking the main stack and the callback queue

console.log("This is first");
setTimeout(() => {
  console.log("This is second");
}, 0);
console.log("This is third");

