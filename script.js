let user = document.querySelector("#user")
let welcome = document.querySelector("#welcome")

user.focus()
// Enter
user.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.querySelector("#btn").click();
    }
});

let btn = document.querySelector("#btn").addEventListener('click', ()=>{
    let userValue = user.value

    // Salvar LocalStorage
    localStorage.setItem("name", userValue)

    // Pegar item do LocalStorage
    let name = localStorage.getItem("name")
    
    welcome.innerHTML = `Bem Vindo(a) <span>${name}</span>`

    user.value = ""
})

let exit = document.querySelector("#exit").addEventListener('click', ()=>{
    // Excluir item LocalStorage
    localStorage.removeItem("name")

    welcome.innerHTML = "Faça seu Login"
})

function local() {
    let name = localStorage.getItem("name")

    if (name == null) {
        welcome.innerHTML = "Faça seu Login"
    } else {
        welcome.innerHTML = `Bem Vindo(a) <span>${name}</span>`
    }

}

local()