const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

let todos = [];

todoForm.addEventListener("submit", submitTodo);

function submitTodo(event) {
    event.preventDefault();
    const addNew = todoInput.value;
    todoInput.value = "";
    const todoWithTime = {
        text: addNew,
        id: Date.now()
    }
    todos.push(todoWithTime);
    addTodo(todoWithTime);
    saveTodos()
}

function addTodo(addNew){
    const li = document.createElement("li");
    li.id = addNew.id
    const span = document.createElement("span");
    span.innerText = addNew.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
    btn.addEventListener("click",deleteTodo);
    
}
function deleteTodo(event){
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function saveTodos(){
    localStorage.setItem("localTodos", JSON.stringify(todos));
}

const savedTodos = localStorage.getItem("localTodos");

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos
    parsedTodos.forEach(addTodo);
}

