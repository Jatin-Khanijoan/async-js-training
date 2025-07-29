// callbacks is always a function
// this only executes when the main stack is empty
// this means it executes when async function is completed

const ans = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(ans); // Logs: Promise { <pending> }

// With Callback 
function fetchPosts(callback) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      callback(null, data); // Call callback with data
    })
    .catch(error => {
      callback(error, null); // Call callback with error
    });
}

// Call the above function and pass a callback
fetchPosts(function(error, data) {
  if (error) {
    console.error("Error fetching posts:", error);
  } else {
    console.log("Posts received:", data);
  }
});
