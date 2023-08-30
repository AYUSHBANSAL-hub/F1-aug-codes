const welcomeMessage = document.getElementById("welcomeMessage");
const userName = getCookie("name");
if (userName) {
  welcomeMessage.innerText = `Hi There - ${userName}`;
}
function setCookie(value, ) {
  document.cookie = `name=${value}`;
}
function getCookie() {
  if (document.cookie) {
    return document?.cookie
      ?.split("; ")
      ?.find((row) => row?.startsWith("name"))
      .split("=")[1];
  }
}
function handleSubmit() {
  let userInput = document.getElementById("userName").value;
  console.log("YO", userInput);
  welcomeMessage.innerText = `Hi There - ${userInput}`;
  setCookie(userInput);
}
document.getElementById("btn").addEventListener("click", handleSubmit);
