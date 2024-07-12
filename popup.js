const uName = document.getElementById("uName");
const messageBody = document.querySelector(".welcome");

uName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    messageBody.textContent = `Welcome ${uName.value}`;
  }
});
