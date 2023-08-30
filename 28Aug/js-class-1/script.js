console.log("javascript");

document.getElementById("heading").innerText="Hello JavaScript";

document.getElementById("btn-1").addEventListener("click",()=>alert("btn-1 is clicked"));

let myname=document.createElement("h1");
myname.innerText="My name is Ayush"

document.getElementById("box").appendChild(myname);