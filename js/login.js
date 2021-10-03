const loginForm = document.querySelector("#login-form");
const username = document.querySelector("#username");
const btn = document.querySelector("#btn");
const userId = document.querySelector("#login-id");
const loginBrowser = document.querySelector("#first-form");
const mainContent = document.querySelector("#main");

function paintName(name){
    userId.innerText = `${name}`; 
    loginBrowser.classList.add("hidden"); 
    mainContent.classList.remove("hidden");
}

function readName(e){
    console.log(loginForm);
    e.preventDefault();
    const id = username.value;
    localStorage.setItem("username",id);
    paintName(id);
    username.value = "";
}

loginForm.addEventListener("submit",readName);
const LOCAL_NAME = localStorage.getItem("username");
if(LOCAL_NAME){
    paintName(LOCAL_NAME);
}
