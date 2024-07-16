const uName = document.getElementById("uName");
const messageBody = document.querySelector(".welcome");
const butn = document.querySelector(".btn")

uName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    messageBody.textContent = `Welcome ${uName.value}`;
  }
});

butn.addEventListener("click", () => {
  console.log("Click event listener was added")
})
