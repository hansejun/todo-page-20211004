const body = document.querySelector("body");
const logform = document.querySelector("#login-form");
const todolist = document.querySelector("header span");
const colors = [
  ["#FDEB71","#F8D800"],
  ["#52E5E7","#130cB7"],
  ["#CE9FFC","#7367F0"],
  ["#F05F57","#360940"],
  ["#F761A1","#8C1BAB"],
  ["#FCCF31","#F55555"],
  ["#EEAD92","#6018DC"] 
];

let random = Math.floor(Math.random()*colors.length);
body.style.background = `linear-gradient(to bottom right,${colors[random][0]},${colors[random][1]})`;
logform.style.boxShadow = `2px 2px 5px ${colors[random][0]}, -2px -2px 5px ${colors[random][1]}`;
todolist.style.color = `${colors[random][0]}`;
