var email = document.getElementById("email")
var senha = document.getElementById("senha")
var loginBtn = document.getElementById("gerador")

loginBtn.addEventListener("click", ()=> {
    if (email.value != "" && senha.value != ""){
        window.location.href = 'homepage.html'
}
else {
        alert("Digite um e-mail / senha")
    }
});