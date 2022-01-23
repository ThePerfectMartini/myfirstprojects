const todo = document.getElementById("todo");



// login

const loginForm = document.getElementById("loginForm")
const loginInput = loginForm.querySelector('input')
const wellcomeMessage = document.getElementById('wellcomeMessage')

loginForm.addEventListener('submit' , login)

function test(somthing){
    console.log(somthing)
}


function login(event){
    event.preventDefault();
    const id = loginInput.value
    localStorage.setItem("id", id)
    loginInput.value = ""
    checkId()
    
}

checkId()

function checkId(){
if (localStorage.getItem("id") !== null){
    todo.classList.remove("hidden")
    loginInput.classList.add("hidden")
    wellcomeMessage.classList.remove("hidden")
    wellcomeMessage.innerText = `환영합니다! ${localStorage.getItem("id")}님!`
} else todo.classList.add("hidden")
}

