// Create the button element
// const button = document.createElement("button");
// button.textContent = "Log-Me";
// button.id = "add_me";

// // Create the div element
// const messageDiv = document.createElement("div");
// messageDiv.textContent = "I am here";
// messageDiv.id = "message_div";
// messageDiv.className = "hidden";

// // Append the button to the body
// document.body.appendChild(button);

// // Add click event listener to the button
// button.addEventListener("click", () => {
//   // Append the div to the body
//   document.body.appendChild(messageDiv);

//   // Remove the hidden class to display the div
//   messageDiv.classList.remove("hidden");

//   // Change the button color to red after 5 seconds
//   setTimeout(() => {
//     button.style.backgroundColor = "red";
//   }, 5000);
// });

const button = document.createElement("button");
button.textContent = "Log-Me";
button.id = "add_me";

const aDiv = document.createElement("div");
aDiv.textContent = "Click event listener was added";
aDiv.className = "add_me hide";

document.body.appendChild(button);

button.addEventListener("click", () => {
  document.body.appendChild(aDiv);
  aDiv.classList.remove("hide");
  console.log("show div");
  setTimeout(() => {
    aDiv.classList.add("hide");
  }, 5000);
});
