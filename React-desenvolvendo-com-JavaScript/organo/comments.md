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

### Lista dos times

Vamos criar um novo componente chamado ListaSuspensa.

No arquivo index.js desse novo componente digitamos:

    import './ListaSuspensa.css'

    const ListaSuspensa = (props) => {
        return (
            <div className='lista-suspensa'>
                <label>{props.label}</label>
                <select>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
            </div>
        )
    }

    export default ListaSuspensa

Bom antes de explicar o código vale ressalta que o React, para entendermos melhor devemos entender que o projeto é basicamente a construçõ de diversos componentes. Exemplo: temos o form nesse projeto, mas dentro dele cada tag basicamente são um componente diferente, nesse nosso proejto temos o componente CampoTexto que são os inputs de texto, temos o input de opções que é outro componente e vale ressaltar que esse componente do select pode ser utilizados em diversas outras partes do código, pois os valores contidos nele são transmitidos através dos parâmetros do prop.

Agora explicando o código, temos a estrutura bsica do componente com a const e return e dentro dele passamos o valor da label com o props e no select ele percorre com o map esses valores que estão no array e basicamente ele cria um opção para item do array. Lembrando que esse array já está pré definido no arquivo do formulário:

    import CampoTexto from '../CampoTexto'
    import ListaSuspensa from '../ListaSuspensa'
    import './Formulario.css'

    const Formulario = () => {

        const times = [
            'Programação',
            'Front-End',
            'Data Science',
            'Devops',
            'UX e Design',
            'Mobile',
            'Inovação e Gestão'
        ]

        return (
            <section className='formulario'>
                <form>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto label="Nome" placeholder="Digite seu nome" />
                    <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                    <CampoTexto label="Imagem" placeholder="Informe o endereço de imagem" />
                    <ListaSuspensa label="Time" itens={times}/>
                </form>
            </section>
        )
    }

    export default Formulario

Temos também o parâmetro Key que é semelhante ao ID, ele serve para judar o react a atualizar a lista basicamente e SEMPRE devemos lembrar que ele é um valor UNICO, não pode ocorrer alteração nele.

Lembrando que a função map nos retorna um novo array, nesse caso é como se o map pegasse cada item do array e colocasse a tag options neles e o React vai interpretar esse array que o map trouxe e colocá-lo no código.

### Criando Botão

Vamos criar uma nova pasta em componentes chamada Botao e nesssa pasta criaremos o index.js e o Botao.css.

Dentro do index.js digitamos:

    import './Botao.css'

    const Botao = (props) => {
        return (
            <button className='botao'>
                {props.children}
            </button>
        )
    }

    export default Botao

Seguimos a estrutura padrão do componentes, mas agr utilizamos o {props.children}. Ele serve para no seguinte. No arquivo do fromulario adicionamos o botaõ da seguinte forma:

    <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço de imagem" />
        <ListaSuspensa label="Time" itens={times}/>
        <Botao>
            Criar Card
        </Botao>
    </form>

O botão tem uma tag de abertura e fechamento <Botao></Botao>, esse é uma outra maneira de adicionarmos as tags.

Nesse caso então tudo que estiver Dentro dessa tag botao, vai ser capturada pelo props.children, então se quisermos colocar um texto e depois uma tag img nós poderiamos fazer isso e o props.children capturaria tudo.

### Escutando eventos

Criamos uma função semelhante ao addEventListener que existe no Js padrão, mas no React ele fica com a seguinte sintaxe:

    const aoSalvar = (evento) => {

            evento.preventDefault()
            console.log("Form foi submetido")
        }

        return (
            <section className='formulario'>
                <form onSubmit={aoSalvar}>

Nós criamos a função aoSalvar e chamamos ela na tag form, e nela colocamos qual tipo de evento queremos ouvir que nesse caso é o submit, mas poderia ser um click ou keyup por exemplo.

E utilizamos também uma forma de validação:

    <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
    <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
    <CampoTexto label="Imagem" placeholder="Informe o endereço de imagem" />
    <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>

Colocamos um obrigatorio={true}, esse obrigatorio faz referencia a tag required do html, onde significa que aquele campo é obrigatório.

Mas devemos colocar nas tags que queremos o requirede da seguinte forma:

    const CampoTexto = (props) => {
        return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input required={props.obrigatorio} placeholder={props.placeholder}/>
            </div>
        )
    }

É basicamente uma condição, se a tag do componente conter um obrigatório={true}, então a tag input html receberá umm parâmetro required, deixando aquele texto obrigatório.

### Manipulando o input do usuário

Vamos pegar os valores que estão sendo colocados no input. Para isso no arquivo js do CampoTexto vamos as dicionar a função onChange:

    let valor = 'Allisson'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )

Nós acrescentamos um evento no input onChage, esse vento é que toda mudança que ocorrer no input ele vai executar a função aoDigitado e nela vamos pegar o valor do input através do evento.target.value e aqui nada mais é que o javascript comum.

### Controlando o estado

Ainda no arquivo js do CampoTexto digitamos:

    const [valor, setValor] = useState('Allisson')

    const aoDigitado = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )

Bom, ainda me parece um pouco confuso essa parte, mas com o tempo vou aprendendo.

Mas a linha de código const [valor, setValor] = useState('Allisson'), basicamente nos permite que os valores sejam alterados tanto qui na variável valor como no input. 

Nós setamos esse valor através do setValor(evento.target.value) e com isso conseguimos altera-lo normalmente e é claro que o useState pode ser uma string vazia ou com conteúdo e também nao podemos esquecer de importar esse useState import { useState } from 'react', pois é uma função do react em si.

### Entendendo melhor o useState

Ele é um hook do React, basicamente o React é utilizado para rendenizar partes de uma página e não recarregar a página inteira para alterar algum dado, mas quando a gente precisa que algo atualize nessa tela, isso precisa estar dentro de uma variável de estado que no caso é o nosso useState. porque assim o React entende que aquele valor que criamos vai ser comparado em algum momento quando sofrer alguma atualização.

Então basicamente você tem um valor X e isso está armazenado na Dom virtual do react, quando essa variável X mudar para XY, o React vai compara a Dom birtual atual com a Dom antiga e vai perceber essa modificação e atualizar aquela parte da página.

Exemplo contador que vi no vídeo.

Outro exemplo:

    let nome = 'Allisson'

    Queremos colocar no input um value={nome}. 

    Isso aqui vai colocar lá no input o nome Allisson, mas não vamos pode altera-lo por conta de uma situação do React que ele não permite.

    Para resolver isso precisamos criar um estado nessa variavel nome e comom fazemos isso: Da seguinte forma:

    cont [nome, setNome] = useState('')

    <input value={nome} onChange={aoDigitado}/>

    const aoDigitado = (evento) => {
        setNome(evento.target.value)
    }

O que foi feito aqui?

No js padrão nós teriamos que buscar o elemento no dom, pegar o valor daquele elemento, e depois manipula-lo.

Aqui no React nós fizemos:

Dissemos para o a tag input que se valor é a variável nome value={nome}.

Quam é a variável nome?

cont [nome, setNome] = useState('')

Porém essa variável precisa ser atualizada toda vez que o usuário escrever lá no input. Então sabendo disso no colocamos um listener onChange chamando a função aoDigitado.

O que essa função faz?

Ela pega a variável setNome, esse setNome podemos interpretar como um clone da variável nome, e coloca nessa variável o valor de evento do listener. Vale lembrar que todo listener tem um evento, tem algo acontecendo e é isso que o parâmetro evento pega.

Então nós pegamos esse evento.target.value, que é o valor que acabou deser digitado no input, e colocamos esse valor na variável setNome que por sua vez passa esse valor para a variável nome, ou seja, a variável nome é automaticamente atualizada e assim o value={nome} é atualizado.











 
