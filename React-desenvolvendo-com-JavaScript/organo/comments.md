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

### Criando novo componente de texto

Vamos criar outra pasta em componentes chamada CampoTexto.

E dentro dessa pasta vamos criar os arquivos CampoTexto.js e CampoTexto.css.

Para uma questão de organização o arquivo chamado CampoTexto.js foi renomeado para index.js.

Com isso na hora de fazer o import do arquivo ele não repetição de palavras:

    import CampoTexto from './componentes/CampoTexto';

Aqui a gente apenas declarou a importação da constante e dissemos a ele que ele está contido na pasta CampoTexto dentro da pasta componentes e como o arquivo chama index.js o próprio sistema já consegue entender que a const CampoTexto está naquele arquivo index.js.

Lembrando que esse novo componente utilizamos uma forma diferente de escrita:

    const CampoTexto = () => {
        return (
            <div>
                <label>Nome</label>
                <input />
            </div>
        )
    }

    export default CampoTexto

Através de uma constante e arrow funtion criamos esse componente CampoTexto, lembrando que podemos escrever tanto como no caso do header como nesse caso, mas de acordo com o professor, essa forma com arrow funtion é mais utilizada.

Por questão de organização também podemos encontrar em alguma estrutura de trabalha uma pasta Banner por exemplo e dentro dela teremos dois arquivos js um chamado Banner.js que é o do componente e outro chamdo index.js, porém nesse caso o arquivo Banner.js ele é exportado direto na constante:

    export const Banner = () => {
        return (
            <header>
                <img />
            </header>
        )
    }

E lá no arquivo index.js que está na mesma pasta importamos essa const e depois exportamos:

    import { Banner } from "./Banner";

    export default Banner

E lá no arquivo principal App.js importamos esse arquivo index.js.

Esse modelo é interessante, pois conseguimos com isso criar diversos banners diferentes e testá-los no layout e depois só expostarmos o banner que queremos sem a necessidade de ficar apagando os outros arquivos de banner.

### Parâmetros

Queremos enviar parâmetros, pois queremos um mesmo input, mas com labels diferentes.

Lembrando que componentes são funções e conseguimos passar parâmetros para funções.

O React entrega para nós um parâmetro chamado props, que são as propriedades que o componente recebeu.

No JSX para eu conseguir imprimir o valor de uma variável eu preciso colocar entre chaves:

import './CampoTexto.css'

    const CampoTexto = (props) => {
        return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input placeholder='Digite o seu nome'/>
            </div>
        )
    }

    export default CampoTexto

Essa parte do componente CampoTexto temos:

    import './CampoTexto.css'

    const CampoTexto = (props) => {
        return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input placeholder={props.placeholder}/>
            </div>
        )
    }

    export default CampoTexto

E no arquivo App.js ficou:

    import Banner from './componentes/Banner/Banner';
    import CampoTexto from './componentes/CampoTexto';

    function App() {
    return (
        <div className="App">
        <Banner/>
        <CampoTexto label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Informe o endereço de imagem"/>
        </div>
    );
    }

    export default App;

Basicamente nós criamos um componente de input e de label e passamos "parâmetros" para que nós pudessemos reaproveitar o código.

### Criando formulário

Vamos criar outra pasta dentro da pasta componentes chamada Formulário. E vamos criar o arquivo index.js e Formulario.css.

    import CampoTexto from '../CampoTexto'
    import './Formulario.css'

    const Formulario = () => {
        return (
            <section className='formulario'>
                <form>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto label="Nome" placeholder="Digite seu nome" />
                    <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                    <CampoTexto label="Imagem" placeholder="Informe o endereço de imagem" />
                </form>
            </section>
        )
    }

    export default Formulario

Criamos essa estrutura de formulário onde basicamente tiramos o ele CampoTexto do App.js e colocamos nesse novo arquivo do formulário e por enquanto stamos seguindo essa estrutura básica de criar componentes.














 
