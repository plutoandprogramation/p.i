var peso = document.getElementById("peso");
var altura = document.getElementById("altura");

var divResposta = document.getElementById("resposta");
var divRespostabg = document.getElementById("resposta-bg")
var btnGerar = document.getElementById("gerador");

var perdaDePeso = document.getElementById("perdaDePeso")
var ganhoDeMassa = document.getElementById("ganhoDeMassa")



btnGerar.addEventListener("click", () => {
    if (peso.value == "" || altura.value == "") {
        alert("Digite um peso / altura")
    } else {
        var pergunta = "Crie uma dieta dentro de uma div HTML para uma pessoa que tem " + peso.value + " kilos, " + altura.value + " metros e quer "
        if (perdaDePeso.checked == true) {
            pergunta = pergunta + "perder peso"
        }
        if (ganhoDeMassa.checked == true) {
            if (perdaDePeso.checked == true) {
                pergunta = pergunta + " e "
            }
            pergunta = pergunta + "ganhar massa"
        }
        console.log(pergunta)
        enviarPergunta(pergunta)
    }
});


const a = "sk-DIc7NJmheltEE";
const p = "lOub2F8T3BlbkFJV";
const i = "OY8B3hbA3W6iiqIdKBG";
const apiKey = a + p + i;
const imgLoading = document.getElementById("imgLoading");
const pResposta = document.getElementById("resposta");

async function enviarPergunta(pergunta) {
  pResposta.innerText = "";
  imgLoading.style.display = "block";

  await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: pergunta,
      max_tokens: 2048,
      temperature: 0.5,
    }),
  })
    .then((objResposta) => objResposta.json())
    .then((resposta) => {
      console.log(resposta)
      imgLoading.style.display = "none";
      pResposta.innerHTML = resposta.choices[0].text;
      divRespostabg.style.display = "block"
    });
}

document.addEventListener("click", (event)=> {
    if (event.srcElement.id = "resposta-bg") {
        divRespostabg.style.display = "none"
    }
})




































































/*
function calcularIMC() {
    var imc = peso.value / (altura.value * altura.value)

    if (imc <= 18.5) {
        alert(imc.toFixed(2) + " MAGREZA")
    }

    else if (imc < 24.9) {
        alert(imc.toFixed(2) + " NORMAL")
    }

    else if (imc < 29.9) {
        alert(imc.toFixed(2) + " SOBREPESO")
    }

    else if (imc < 39.9) {
        alert(imc.toFixed(2) + " OBESIDADE")
    }

    else if (imc > 40.0) {
        alert(imc.toFixed(2) + " OBESIDADE GRAVE")
    }
}

*/
