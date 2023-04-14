SQL é uma sigla em inglês para Structured Query Language que pode ser livremente traduzida para Linguagem de Consulta Estruturada e é uma linguagem padrão para trabalhar com bancos de dados relacionais.

Ela surgiu nos anos 70 com a IBM, como uma alternativa dos bancos sequenciais, que eram uma lista de tabelas que não tinha relação entre si. Com o passar do tempo sofreu dificuldades para realizar a inclusão, alteração, exclusão de dados e outras necessidades, aumentando a complexidade do manuseio de banco de dados.

Após os bancos sequenciais, vale lembrar o surgimento da álgebra relacional como uma outra alternativa para interagir com bancos de dados relacionais. No entanto, ainda havia barreiras na perpetuação e compreensão de todas as expressões matemáticas usadas em álgebra relacional.

Para entender a melhor maneira de trabalhar dados estruturados, os laboratórios da IBM vieram com as primeiras versões do SQL. Mas quando outras empresas também começaram a trabalhar nisso, um órgão americano de padrões, o American National Standards Institute (ANSI), resolveu unificar todas as iniciativas sobre o movimento do banco de dados SQL promovendo um padrão que, de início, chamou-se de SEQUEL (Structured Query Language) ou seja, Linguagem de Consulta Estruturada em inglês. Já no Brasil, esse termo se popularizou com o nome de SQL.

A padronização da linguagem que trabalha com dados estruturados trouxe uma série de vantagens, dentre elas podemos citar a facilidade no aprendizado, já que a linguagem SQL se aproxima de frases da língua inglesa. Outra vantagem é o surgimento de vários outros sistemas de gerenciamento de banco de dados que usam a Linguagem SQL. Com o padrão ANSI, a Oracle começou a dar suporte à linguagem SQL, a Microsoft também, com o SQL Server, também passou a adotar o SQL como padrão, facilitando a integração de sistemas, mesmo de SGBDs diferentes.

Vale ressaltar que atualmente a linguagem SQL tem suas limitações. Em tempos de redes sociais e big data, surgiu a possibilidade de analisar dados não-estruturados, como grafos e imagens, pelo fato da modelagem relacional exigir chaves primárias e estrangeiras, acaba trazendo uma iniciativa um pouco engessada e para suprir a necessidade de análise e armazenamento de dados não-estruturados o NoSQLs é a melhor alternativa.

É possível compreender que a linguagem SQL prevaleceu quando se diz respeito a modelos estruturados e com a padronização ANSI surgiram várias facilidades para empresas e desenvolvedores. Contudo, mesmo com desvantagens, o banco de dados relacional ainda é campeão para gerir o pagamento e recebimento de uma empresa, controlar o fluxo de produção e modelar quaisquer processos repetitivos.

### Criando 

Para criar o SCHEMA digitamos:

    CREATE SCHEMA nome_do_banco;

Dentro desse banco de dados vamos criar as tabelas.

Criar tabelas:

    create table LIVROS (
        ID_LIVRO INT NOT NULL,
        NOME_LIVRO VARCHAR(100) not null,
        ALTORIA varchar(100) not null,
        EDITORA varchar(100) not null,
        CATEGORIA varchar(100) not null,
        PREÇO decimal(5,2) not null,
        
        primary key (ID_LIVRO)
    );

Criamos a tabela com o create table nome_da_tabela.

Depois definimos as colunas da tabela com o nome dela é o tipo dela.

No caso do campo PREÇO utilizamos o decimal e ddefinimos nos parênteses dois valores. O primeiro diz quantos algarismos teremos no preço, no nosso caso é 5 sendo 3 algarismo para o valor inteiro e 2 para o valor dos centavos. E depois definimos quantas casas decimais teremos que nesse caso é duas casas após a virgula.

### Tipos de dados em SQL

Numéricos exatos:

- Inteiros de vários tamanhos que podem ser formatados. Exemplo: 9.78 pode ser definida como decimal(3,2) 9 é número inteiro é do tipo int.
- int, smallint, decimal(i,j), numeric(i,j), dec(i,j)

Numéricos aproximados:

- Números de ponto flutuante com precisão. Exemplo: 7.90 é do tipo float
- float ou real, double precision

Cadeias de caracteres:

- Textos de tamanhos fixos. Exemplo: “modelagem” é char(9).
- char(n) ou character(n)

Cadeias de caracteres:

- Textos de tamanhos fixos. Exemplo: “modelagem” é char(9).
- char(n) ou character(n)

- Texto de tamanho variável
- varchar(n) ou char varying(n) ou character varying(n)

Valores lógicos:

- Termos que representa verdadeiro ou falso. Exemplo: true, false ou unknown
- true, false ou unknown

Datas:

- Datas, dias, mês, anos. Exemplo: Calendário lunar, calendário comercial
- Date DD-MM-YYYY ou YYYY-MM-DD-

- Tempo. Exemplo: 10:59:13 é tipo HH:MM:SS
- HH:MM:SS, timestamp

Mesmo com o padrão ANSI, cada SGBD tem seu manual com mais detalhes sobre tipos específicos. 

### Alterando a tabela

Vamos ter que alterar uma tabela para acrescentar a chave estrangeira para ter relações entre tabelas.

Para isso digitamos:

    alter table ESTOQUE add constraint CE_ESTOQUE_LIVROS
    foreign key (ID_LIVRO)
    references LIVROS (ID_LIVRO)
    on delete no action
    on update  no action;

O alter table nome_da_tabela serve para alterar a tabela específica, no nosso caso a tabela ESTOQUE.

Nós adiconamos uma restrição com add constraint e colocamos o nome de CE_ESTOQUE_LIVRO.

Porém queremos que esse campo tenha o valor do ID_LIVRO, pois esse valor será nossa chave estrangeira.

Então colocamos o foreing key (ID_LIVRO), dizendo que a chave estrangeira será o campo ID_LIVROS.

E também fizemos a referencia para a tabela LIVROS com o comando references LIVROS (ID_LIVROS), para dizer que o ID_LIVRO é uma coluna da tabela LIVROS.

Os comandos on delete no action e on update  no action, vão gerar um erro toda vez que alterar um livro que estiver na tabela ESTOQUE, mas não estiver registrado na tabela LIVROS.

### INSERT

Para colocarmos os dados na tabela precisamos primeiro desabilitar as chaves estrenageiras para que as tabelas não tenham relação por enqaunto. Para isso digitamos:

    set foreign_key_checks = 0; 

Com isso as tabelas não estão mais relacionadas e a chave estrangeira está desabilitada.

Agora vamos cadastrar um novo livro no banco de dados com o seguinte comando:

    insert into livros values (
        1,
        "Percy Jackson e o ladrão de raios",
        "Rick Riordan",
        "Intrínseca",
        "Aventura",
        34.65
    );

O comando insert into nome_da_tabela values (), serve para cadastrarmos os itens dentro daquela tabela que no nosso caso é a tabela LIVROS.

Depois o que for texto colocamos entre aspas e o que for número não precisamos colcoar entra aspas, mas devemos colocar o ponto caso tenha casas decimais.

Para inserir vários linhas de uma vez na tabela livros digitamos:

    insert into livros values
        (2, "A volta ao mundo em 80 dias", "Júlio Verne", "Principis", "Aventura", 21.99),
        (3, "O cortiço", "Aluísio de Azevedo", "Panda Books", "Romance", 47.80),
        (4, "Dom Casmurro", "Machado de Assis", "Via Leitura", "Romance", 48)
    ;

Nesse caso é só colocar an informações entre parêteses e separa por vírgula.

Caso quisermos colocar itens em ordem diferente por algum motivo, podemos digitar da seguinte maneira:

### Consultando dados

Para consultar alguma tabela utilizamos:

    select * from nome_da_tabela

Se quisermos ver apenas um campo específico digitamos:

    select nome_do_campo from nome_da_tabela

Se quisermos apelidar o título da coluna por algum motivo digitamos:

    select id_livro as "Código do Livro" from livros;

De vez aparecer uma coluna com o título id_livro lá vai parecer o mesmo conteúdo do id_livro, mas com o título Código do Livro.

Mas lembrando que isso não alteera o titulo, serve somente para aquela pesquisa em específico.

## Filtros no SQL

Se quisermos filtrar algum dados de alguma tabela podemos utilizar o comando wherer, exemplo:

    select * from livros
    where categoria = "biografia";

Nesse caso ele vai pesquisar todos os dados da tabela livros, porém somente os dados onde (where) a categoria for igual ao texto "biografia".

Se quisermos fazer um filtro ainda mais específico podemos digitar:

    select * from livros
    where categoria = "romance" and preço < 48;

Nesse caso ele vai pesquisar na tabela livros onde a categoria for igual a romance e o preço for menor que 48. E utilizamos o comando AND para acrescentar mais filtros.

Outro exemplo de filtro:

    select * from livros
    where categoria = "poesia" and not (autoria = "Luís Vaz de Camões" or autoria = "Gabriel Pedrosa");

Nesse caso adiconamos um filtro onde a categoria teria que ser poesia, porém dentro dos elementos que contém a categoria poesia eu não queria os autores Luíz Vaz de Camões e Gabriel Pedrosa. Utilizamos o comando AND NOT juntos para tal filtro.

    select distinct id_livro from livros;

O comando acima mostar todos os id_livro porem sem repetir número graças ao comando distinct.

    select distinct id_livro from vendas
    where id_vendedor = 1
    order by id_livro;

O comando order by serve para colcoar os itens em ordem do menor para o maior.

### Deletando dados

Para deletar algum dado utilizamos o comadno delete. Exemplo:

    delete from livros where id_livro = 8;

Nesse caso deletamos a linh com id_livro 8 da tabela livros.

### Update

Para atualizarmos algum valor da tabela podemos utilizar o comando update. Exemplo:

    update livros set preço = 0.9*preço;

Nesse caso falamos que queremos setar um preço onde preço vai ser igual a ele mesmo vezes 0.9.

E para isso utilizamos o comando update e set .

### Filtro usando duas tabelas

    select vendas.id_vendedor, vendedores.nome_vendedor, sum(vendas.qtd_vendida)
    from vendas, vendedores
    where vendas.id_vendedor = vendedores.id_vendedor
    group by vendas.id_vendedor;

Bom, primeiro selecionamos os campos de cada tabela que queremos mostrar com select vendas.id_vendedor, vendedores.nome_vendedor, sum(vendas.qtd_vendida). Depois dissemo de onde são essas tabelas com from vendas, vendedores.

Após isso utilizamos o where para dizer que vendas.id_vendedor é igual vendedores.id_vendedor, pois eles tem essa relação. Depois utilizei o group by vendas.id_vendedor para dizer ao comando sum la em cima que eu quero somar as vendar de cada vendedor específico.

Nesse código estamos dizendo que o id_vendedor da tabela vendas tem relação com o id_vendedor da tabela vendedores.

### Inner join

    select vendas.id_vendedor, vendedores.nome_vendedor, sum(vendas.qtd_vendida)
    from vendas inner join vendedores
    on vendas.id_vendedor = vendedores.id_vendedor
    group by vendas.id_vendedor;

Esse código vai mostar a mesma tabela do código acima, mas dessa vez utilizamos o inner join.

### Mais informações

Além de consultar os valores puramente como foram inseridos na tabela, é comum construirmos informações com métricas que resumem uma tabela. Isso pode ser feito com as funções de agregações, vamos entender cada um dos comandos:

- MAX: a partir de um conjunto de valores é retornado o maior entre eles;
- MIN: analisa um grupo de valores e retorna o menor entre eles;
- SUM: calcula o somatório dos valores de um campo específico;
- AVG: realiza a média aritmética dos valores de uma determinada coluna; e
- COUNT: contabiliza a quantidade de linhas selecionadas.

### Left e Right join

    select livros.nome_livro,
        vendas.qtd_vendida
    from livros left join vendas
    on livros.id_livro = vendas.id_livro
    where vendas.qtd_vendida is null;

Esse comando ele basicamente tras duas tabelas para serem comparadas uma do lado esquerdo e outra do lado direito, por conta do comando left join.

    select 
            vendas.id_livro,
            livros.nome_livro,
            vendas.qtd_vendida
    from livros right join vendas
    on livros.id_livro = vendas.id_livro;

Nesse caso podemos observar que lguns livros estão com o valor nulo.

Em resumo dessa aula, sabemos que faz diferença a ordem em que as tabelas são pesquisadas.








