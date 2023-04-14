# Começando com REACTJS

Quando vamos fazer uma aplicação com REACT devemos criar uma base de código, assim como fazemos com html, css e afins. Para criar esse projeto base digitamos no terminal o seguinte comando:

    npx create-react-app organo

Nesse caso ele cria um app react com o nome organo.

Agora precisamos entrar na pasta do projeto:

    cd organo

E vamos iniciar o projeto com:

    npm start

Lembrando que o npm serve para rodar coisas locais o npx serve para rodar um script mas de forma remota, não está muito vinculado com o ambiente local.

### Arquivo App.js

A função app() nada mais é do que uma maneira de escrever um componente React.

Vamos criar uma pasta chamada componentes dentro da pasta src e nela vai ficar todos os componentes da aplicação. Esse componenetes são praticamente partes da sua página.

E dentro da pasta componentes vou criar outra pasta com o nome Banner.

Dentro da pasta Banner criar um arquivo chamado Banner.js.

### Primeiro passo

Dentro do arquivo Banner.js digitamos:

    function Banner() {
        return (
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        )
    }

    export default Banner

Basicamente os componentes são função em JS que podemos exportar em nossos projetos.

A tag img que parece um html, na verdade não é um html ele é um JSX. O JSX é como o React trabalha com a parte visual. O que React vai fazer aqui é entender essa tag e fazer um append lá no no DOM. É similar o que nós fariamos no javascript com document.createElement("img").

Para utilizar esse componente Banner precisamos importá-lo no App.js e colocá-lo dentro da tag:

Importação:

    import Banner from './componentes/Banner/Banner';

Chamada na tag:

    function App() {
    return (
        <div className="App">
        <Banner/>

### Criando o CSS do Banner

Dentro da pasta Banner vamos criar o arquivo Banner.css. E dentro do arquivo digitamos o css normal:

    .banner {
        background-color: #6278F7;
        text-align: center;
    }

    .banner img {
        max-width: 100%;
    }

Para colocar esse CSS no componente banner digitamos lá no arquivo Banner.js:

    import './Banner.css'

    function Banner() {
        return (
            <header className="banner">
                <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
            </header>
        )
    }

    export default Banner

Primeiro dentro do arquivo vamos criar o import do CSS e para chamá-lo no arquivo colocamos className, className porque estamos trabalhando com JSX. E lembrando que temos criar aquela estrutura semântica como se fosse o html normal, por isso criamos um header ali.








 
