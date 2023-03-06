Evento de enviar é o submit>

    const form = document.getElementById("novoItem");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault()
        console.log("FUNCIONOU");
    })

Nessa função eu estou passando um parâmetro chamado evento. Esse evento é basicamente todos os dados que estão sendo enviados nessa função submit.

Se colocarmos um console.log do evento ele vai nos retornar tudo o que está acontecendo ali naquele momento:

    const form = document.getElementById("novoItem");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault()
        console.log(evento);
    })

-----------------

evento.preventDefault();

Esse comando interrompe o processo de envio do fromulário até porque nesse momento do código os dados não estão sendo enviados para nenhum lugar.

Após o fim da aula temos como código final:

    const form = document.getElementById("novoItem");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();


        console.log(evento);
        console.log(evento.target.elements['nome'].value);
        console.log(evento.target.elements['quantidade'].value);
    })

os comandos de console.log com target.elements nos retorna os valores obtidos dos inputs do formulário que no nossa caso é o nome e a quantidade.


