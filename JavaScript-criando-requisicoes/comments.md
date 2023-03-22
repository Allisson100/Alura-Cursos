O termo mockar vem da palavra MuckUp, que quer dizer +- um rascunho de algo que será feito futuramente. No nosso projeto vamos fazer um rascunho de uma API.

E vamos fazer isso com o json-server que é um pacote npm que simul um servidor local no nosso computador.

E precisamos instalar o Node.Js.

Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem sem depender de um navegador. Com o Node.js podemos executar aplicações sem o uso do navegador. Além disso, com ele é possível criar praticamente qualquer tipo de aplicações web, desde APIs até servidores para sites estáticos e dinâmicos, como faremos no próximo vídeo.

---------------------------------

    async function listaVideos() {
        const conexao = await fetch("http://localhost:3000/videos")
        const conexaoConvertida = await conexao.json();

        return conexaoConvertida
    }

    export const conectaApi = {
        listaVideos
    }

Criamos a conexão com a API através da função assincrona e exportamos essa função com o export para podermos usar essa função em outros arquivos.

---------------------------------

    import { conectaApi } from "./conectaAPI.js"

    const lista = document.querySelector("[data-lista]")

    function constroiCard() {
        const video = document.createElement("li")
        video.className = "videos__item"
        video.innerHTML = `
            <iframe width="100%" height="72%" src="https://www.youtube.com/embed/pA-EgOaF23I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen></iframe>

            <div class="descricao-video">
                <img src="./img/logo.png" alt="logo canal alura">
                <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
                <p>236 mil visualizações</p>
            </div>
        `

        return video
    }

    async function listaVideo () {
        const lista = await conectaApi.listaVideos();
    }

Aqui criamos uma função responsavél em criar os cards no html e importamos a função que nos tras os dados da API, mas ainda falta colocar as variaveis no template string para ficar tudo certinho.

---------------------------------

    import { conectaApi } from "./conectaAPI.js"

    const lista = document.querySelector("[data-lista]")

    function constroiCard(titulo, descricao, url, imagem) {
        const video = document.createElement("li")
        video.className = "videos__item"
        video.innerHTML = `
            <iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen></iframe>

            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        `

        return video
    }

    async function listaVideos() {
        const listaAPI = await conectaApi.listaVideos();
        listaAPI.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    }

    listaVideos()

Colocamos as variáveis no template string. Dentro da função listaVideos() percorremos o array com forEach() e dizemos para cada elemento que a const lista é o appendChild da li criada. Essa li é criada dentro da função controiCard().

---------------------------------

    async function criaVideo(titulo, descricao, url, imagem) {
        const conexao = await fetch("http://localhost:3000/videos", {
            method: "POST",
            headers: {
                "Content-type": "aplication/json" //Serve para especificar que tipo de arquivo está sendo enviado.
            },
            body: JSON.stringify({
                titulo: titulo,
                descricao: `${descricao} mil vizualizações`,
                url: url,
                imagem: imagem
            })
        })

        const conexaoConvertida = await conexao.json();

        return conexaoConvertida
    }

    export const conectaApi = {
        listaVideos,
        criaVideo
    }

Criei outra função assincrona para onde pedimos a conexão da API, porém passsamos outro parâmetro  e com isso criamos todo uma estrutura de uma função assincrona que faz uma conexão com a API e cria uma requisição post, que nesse caso vai ser servir para cadastrar novos videos na API e expotamos essa função para ser utilizadas em outros arquivos.

Requisições do tipo POST são usadas para enviar dados para a API. Por exemplo, criar um novo registro de usuário com: nome, idade e endereço de e-mail.

Diferente de requisições do tipo GET, você precisará passar um objeto das opções de configuração como um segundo argumento em requisições POST.
