### Aula01

Evento de enviar é o submit.

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

-----------------------------------

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

Os comandos de console.log com target.elements nos retorna os valores obtidos dos inputs do formulário que no nossa caso é o nome e a quantidade.

-----------------------------------

### Aula02

const numeroItem = document.createElement('strong');
numeroItem.innerHTML = quantidade;

Essa linha de código cria um novo elemento que é a tag strong, mas com o inner.HTML nós acrescentamos entre as tags <strong>innerHTML</strong> o número da qua está na variável quantidade.

Temos como código final da aula02:

    const form = document.getElementById("novoItem");
    const lista =  document.getElementById("lista");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        let nome = evento.target.elements['nome'].value;
        let quantidade = evento.target.elements['quantidade'].value;

        criaElemento(nome, quantidade);
    })

    function criaElemento(nome, quantidade) {
        const novoItem = document.createElement('li')
        novoItem.classList.add("item");

        const numeroItem = document.createElement('strong');
        numeroItem.innerHTML = quantidade;

        novoItem.appendChild(numeroItem);
        novoItem.innerHTML += nome;

        lista.appendChild(novoItem);
    }

-----------------------------------

### Aula 03

Explica um pouco sobre o localStorage.

-----------------------------------

### Aula 04

Utilizamos o localStrage para armazenar o item:

    localStorage.setItem("nome", nome);
    localStorage.setItem("quantidade", quantidade);

Porém temos que adicionar múltiplos itens nele ainda.

-----------------------------------

### Aula 05

O localStorage só aceita elementos do tipo STRING.

Então para organizar os elementos criamos um objeto chamado itemAtual:

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

E criamos também um array:

    const itens = [];

Agora para gravar múltiplos itens nesse array utilizamos:

    itens.push(itemAtual);

E para gravar esse array no localStorage precisamos transformar os objetos presentes nele em uma String e para isso utilizamos:

    JSON.stringify(itens)

E temos como código final:

    const form = document.getElementById("novoItem");
    const lista =  document.getElementById("lista");
    const itens = [];

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = evento.target.elements['nome'];
        const quantidade = evento.target.elements['quantidade'];

        criaElemento(nome.value, quantidade.value);

        nome.value = "";
        quantidade.value = "";
    })

    function criaElemento(nome, quantidade) {
        const novoItem = document.createElement('li')
        novoItem.classList.add("item");

        const numeroItem = document.createElement('strong');
        numeroItem.innerHTML = quantidade;

        novoItem.appendChild(numeroItem);
        novoItem.innerHTML += nome;

        lista.appendChild(novoItem);

        const itemAtual = {
            "nome": nome,
            "quantidade": quantidade
        }

        itens.push(itemAtual);

        localStorage.setItem("item", JSON.stringify(itens));
    }

-----------------------------------

### Aula 06

Nessa aula criamos uma condição no array onde ele vai ter o valor vazio ou vai ter o valor do localStorage itens se ele existir:

const itens = JSON.parse(localStorage.getItem("itens")) || [];

Utilizamos o JSON.parse para transformar o que era STRING em Obejto novamente, pois ele sendo objeto conseguimos utilizar o forEach caso contrário ele mostra um erro no console.

    itens.forEach((elemento) => {
        console.log(elemento.nome, elemento.quantidade);
    })

Quando queremos fazer um operação de loop para percorrer os elementos de um array, podemos simplesmente utilizar o forEach, nesse nosso é basicamente, para cada item do arry itens fazer um console.log no elementoAtual.nome e elementoAtual.quantidade.

Muito  melhor do que utilizar uma estrutura de for padrão.







