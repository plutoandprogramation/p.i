var email = document.getElementById("email")
var senha = document.getElementById("senha")
var loginBtn = document.getElementById("gerador")
var ent = 1

loginBtn.addEventListener("click", ()=> {
    if (email.value != "" && senha.value != ""){
        window.location.href = 'homepage.html'
}
else {
        alert("Digite um e-mail / senha")
    }
});

document.addEventListener("keypress", (event)=> {
    if (event.key == "Enter") {
        if (email.value != "" && senha.value != ""){
            window.location.href = 'homepage.html'
    }
    else {
            alert("Digite um e-mail / senha")
        }
    }
});
