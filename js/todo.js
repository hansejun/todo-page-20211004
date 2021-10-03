const todoBtn = document.querySelector("#todo-button");
const mainTimeClock = document.querySelector("#time-clock");
const todoContent = document.querySelector("#todo-content");
const todoForm = document.querySelector("#todo-content form");
const todoText = document.querySelector("#todo-content form input");
const todoList = document.querySelector("#todo-list");

let todos = [];


function lineTodo(e){
  e.target.classList.toggle("line");
}
function showBtn(e){
  e.target.parentElement.querySelector("span").classList.remove("btnShow");
}
function hideBtn(e){
  e.target.parentElement.querySelector("span").classList.add("btnShow");
}
function removeTodo(e){ /*??? */
  const parent = e.target.parentElement;
  parent.remove();  
  todos = todos.filter((a)=>a.id !== parent.id);
  localStorage.setItem("todos",JSON.stringify(todos));
  console.log(todos);

  
}
function paintTodo(objectText){
  const li = document.createElement("div");
  const h2 = document.createElement("h2");
  const span = document.createElement("span");
  li.id = objectText.id;
  li.classList.add("todo-list__content");
  span.classList.add("btnShow");
  h2.innerText = objectText.value;
  span.innerText = "X";
  li.appendChild(h2);
  li.appendChild(span);
  todoList.appendChild(li);

  li.addEventListener("click",lineTodo);
  li.addEventListener("mouseover",showBtn);
  li.addEventListener("mouseout",hideBtn);
  span.addEventListener("click",removeTodo);
  todoText.value= "";
}
function addTodo(e){
  e.preventDefault();
  let TEXT = todoText.value;
  let randomNum = Date.now();
  let objectText = {id:`${randomNum}`,value:`${TEXT}`};
  console.log(objectText);
  todos.push(objectText);
  localStorage.setItem("todos",JSON.stringify(todos));
  paintTodo(objectText);
}

function showTodo(){
  mainTimeClock.classList.toggle("hidden");
  todoContent.classList.toggle("hidden");
  
}

todoBtn.addEventListener("click",showTodo);
todoForm.addEventListener("submit",addTodo);



if(localStorage.getItem("todos")){
  let parseTodos = JSON.parse(localStorage.getItem("todos"));
  parseTodos.forEach(paintTodo);
  todos = parseTodos;
}

