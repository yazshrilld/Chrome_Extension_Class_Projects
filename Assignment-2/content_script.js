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
