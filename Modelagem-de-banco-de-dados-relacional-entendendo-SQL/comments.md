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

