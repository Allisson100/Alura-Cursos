# Curso sobre arrays

    let livros = []

    const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

    getBuscarLivrosDaAPI()

    async function getBuscarLivrosDaAPI () {
        const res = await fetch(endpointDaAPI)
        livros = await res.json()
        console.table(livros);
    }

Criamos uma let livros que nada mais é que um array vazio.

A const endpointDaAPI nada mais é que um objeto de itens que está naquele link.

Depois criamos uma função e pedimos através da const res para requisitar os dados da API (link).

Lembrando que utilizamos o async functions para utilizar o await, o await serve para dizer ao código que queremos que ele espere até o fetch terminar as promisses e com isso jogamos no array livros os dados também com o await, pois demora um pouco para esse processo acontecer e depois usamos console.table para mostrar os dados através de uma tabela, se utilizar o console,log ele vai retornar um array normal no console.

------------------------------------------

    let livros = []

    const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

    getBuscarLivrosDaAPI()

    const elementoParaInserirLivros = document.getElementById('livros')



    async function getBuscarLivrosDaAPI () {
        const res = await fetch(endpointDaAPI)
        livros = await res.json()
        console.table(livros);

        exibirOsLivrosNaTela(livros)
    }

    function exibirOsLivrosNaTela(listaDeLivros) {
        listaDeLivros.forEach(livro => {
            elementoParaInserirLivros.innerHTML += `
                <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}"
                alt="${livro.alt}"/>
                <h2 class="livro__titulo">
                ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
                <div class="tags">
                <span class="tag">${livro.categoria}</span>
                </div>                                                
                </div>
            `
        })
    }

Criamos uma nova função passando como parâmetro o array de livros.

Nessa função utilizamos a função forEach, nela devemos utilizar uma arrow function e através de um template string criamos o código html para exibir na tela.

------------------------------------------

Fizemos uma pequena alteração no cóedigo. Separamos o comando do forEach em outro arquivo js e sepramos o comando mp() em outro:

Arquivo main.js:

    let livros = []

    const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

    getBuscarLivrosDaAPI()


    async function getBuscarLivrosDaAPI () {
        const res = await fetch(endpointDaAPI)
        livros = await res.json()
        let livrosComDesconto = aplicarDesconto(livros)

        exibirOsLivrosNaTela(livrosComDesconto)
    }

Arquivo metodoMap.js:


    function aplicarDesconto(livros) {
        const desconto = 0.3

        livrosComDesconto = livros.map(livro => {
            return {...livro, preco: livro.preco - (livro.preco * desconto)}
        })

        return livrosComDesconto
    }

No main.js estamos criando um novo array (let livrosComDesconto) e estamos dizendo que seu novo conteúdo vai sar o return da função aplicarDesconto(livros).

No metodoMap.js dizemos que o valor do desconto é 0.3 e dizemos que o array livrosComDesconto = o array de livros.map(). Lembrando que o método map() ele cria um novo array baseado em outro com as modificações que você passar, nesse caso nó dizemos que os objetos que estão no array livros vão se manter iguais {...livros,}, mas queremos uma modificação somente no preço que no caso vai ser o valor original - valor original * desconto. Então ele retorna esse novo array lembrando que usamos esse return, pois utilizamos esse método dos ..., e depois usamos outro return para retornar o valor do array na função.

------------------------------------------

### Método filter()

    const botoes = document.querySelectorAll('.btn')
    botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

    function filtrarLivros () {
        const elementoBtn = document.getElementById(this.id)
        const categoria = elementoBtn.value

        let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
        
        exibirOsLivrosNaTela(livrosFiltrados)
        console.table(livrosFiltrados)
    }

Temos alguns botões na página para utilizar como filtro e utilizamos o método filter() para filtrar as categorias de cada livro.

Nesse código utilizamos o querySelectorAll para pegar todos os botões e utilizamos o forEach para percorrer esse array de botões e chamar uma função caso algum deles for clicado.

Dentro da função através da const elementoBtn pegamos o id do botão clicado (this.id) e com isso pegamos seu value e basicamente criamos um novo array para os livros filtrados e chamamos a função que cria os elementos na tela, mas passando como parâmetros o array dos livros filtrados.

Lembrando que para dar certo isso, eu passei o inner.html da div que tem os livros como vazio antes da função criar realemnte os livros.

Arquivo metodoForEach.js :

    const elementoParaInserirLivros = document.getElementById('livros')

    function exibirOsLivrosNaTela(listaDeLivros) {

        elementoParaInserirLivros.innerHTML = ""

        listaDeLivros.forEach(livro => {
            elementoParaInserirLivros.innerHTML += `
                <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}"
                alt="${livro.alt}"/>
                <h2 class="livro__titulo">
                ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
                <div class="tags">
                <span class="tag">${livro.categoria}</span>
                </div>                                                
                </div>
            `
        })
    }


------------------------------------------

### Método Sort()

O método sort() não apresenta uma ordenação estável, para isso temos que passar uma arrow function para que a função ordenen o array de forma correta.

Exemplo:

array = [0, 1, 2, 3, 10]

array.sort()
// 0, 1, 10, 2, 3

Ele retona assim, pois ele compara uma unidade de cada vez, então o 1 do 10 é menor que o 2 por isso o 10 vem antes.

Para arrumar isso de vemos escrever:

array.sort((a, b) => a - b);

Desse forma retorna 0, 1, 2, 3, 10.

Isso porque nesse caso queremos em ordem crescente, ou seja, a função vai pegar dois valores e compara-los, 0 - 1, o resultado vai ser menor que 0 então o 0 fica antes do 1. 10 - 3, o resultado é maior que 0, então a funçõ entende que 10 é maior que 3 e assim sucessivamente. Caso quiser um array em ordem decrescente so trocar a - b por b - a.

Agora no arquivo metodoSort.js digitamos:

    let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
    btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

    function ordenarLivrosPorPreco () {
        let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
        exibirOsLivrosNaTela(livrosOrdenados)
    }

Basicamente adcionamos o evento de click no botão ordenar por preço e nele fizemos um sort no array livros e chamamos a função para exibir os livros na tela.

