// async function abcd() {
//     let raw = await fetch("https://randomuser.me/api/");
//     let data = await raw.json();
//     console.log(data);
// }

// abcd();


// async function getPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json(); // also async, so await it
//     console.log("Posts:", data);
//   } catch (err) {
//     console.error("Failed to fetch posts:", err);
//   }
// }

// getPosts();


// When you use await, you're pausing execution until a Promise settles. If that Promise rejects, it will throw an error just like a synchronous throw does.

// So to handle that error gracefully, you need try...catch.

async function getUser() {
  const response = await fetch("https://some-wrong-url.com");
  const data = await response.json();
  console.log(data);
}

getUser(); 
// UnhandledPromiseRejectionWarning (in Node)
