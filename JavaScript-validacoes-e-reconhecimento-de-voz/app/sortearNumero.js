const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random(0) * (maiorValor + 1));
}

console.log("Número Secreto:", numeroSecreto);


elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;