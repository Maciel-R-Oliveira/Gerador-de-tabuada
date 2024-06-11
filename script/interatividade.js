let tela = document.querySelector("#tela");
let entrada = document.querySelector("#entrada");

entrada.addEventListener("input", calcular);

function calcular(e) {
    tela.innerHTML = "";

    let valorEntrada = Number(entrada.value);

    
        if(isNaN(valorEntrada) || entrada.value.trim() === ""){
            tela.innerHTML = "Por favor, insira um número válido."
            tela.style.display = "block"
            if(valorEntrada === 0){
                tela.style.display = "none"
            }
        } else {
            tela.style.display = "block"
            for(let n = 1;n < 12; n++){
                tela.innerHTML += `${valorEntrada}*${n} = ${valorEntrada*n}<br>`
            }
        }
    
}