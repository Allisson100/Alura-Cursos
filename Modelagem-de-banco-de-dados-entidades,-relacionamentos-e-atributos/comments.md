# Começando curso

<!-- ![Screenshot](img/img01.JPG) Adiciona imagem exemplo -->

### Diferença entre modelos 

A modelagem de dados é um dos processos mais importantes ao se trabalhar em um projeto de banco de dados. Nele, os dados são levantados, tratados e estruturados para, assim, termos uma boa base para a construção de um banco de dados.

Além do modelo conceitual, utilizado para o entendimento dos requisitos do sistema, pois explora as estruturas e conceitos do negócio, também podemos trabalhar com dois outros modelos: o lógico e o físico.

- O modelo lógico é criado para realizar a descrição de como os dados serão armazenados no sistema. Ele explora os conceitos de domínio. Nesse modelo, descrevemos as entidades, os atributos, as chaves primárias e estrangeiras e os seus relacionamentos.

- O modelo físico também é criado para descrever as tabelas, suas colunas e os relacionamentos. Diferente do modelo lógico, podemos utilizar uma linguagem padrão para realizar essa representação: a linguagem SQL, utilizada para trabalhar com banco de dados relacionais.

### SGBD

SGBD - Sistema gerencial de banco de dados.

- Interface para incluir, alterar e consultar.

- Tudo que fazemos em um banco de dados tem que passar por um SGBD.

- É comum confundirem o SGBD com banco de dados.

- Não devemos falar eu trabalho com o banco de dados da ORACLE ou MySQL. O correto é falarmos que trabalhamos com o SGBD da ORACLE ou SGBD do MySQL.

- SGBD é basicamente o software que utilizamos para gerenciar o banco de dados.

SGBDs mais utilizados no mercado:

- MySQL;
- ORACLE;
- PostgreSQL;
- MariaDB;
- Microsoft SQL Server;
- IBM DB2;
- SQLite

Vamos utilizar o software brModelo para a modelagem conceitual do banco de dados.

Existem várias ferramentas avançadas disponíveis no mercado que podem auxiliar a modelagem de banco de dados. Algumas das mais conhecidas são:

- OracleDesigner ™ (Oracle ®): possui uma arquitetura flexível e pode ser instalada em múltiplas plataformas;
- PowerDesigner ™ (Sybase ®): um dos mais utilizados no mercado;
- ERWin (CA ®): também é muito utilizado no mercado;
- Freeware DBDesigner: possui uma grande quantidade de recursos;
- PyDesigner: está disponível para a plataforma Linux;
- VISIO ™ (Microsoft ®): ferramenta direcionada exclusivamente para desenho. Você pode conhecer um pouco mais de como o VISIO funciona, neste Alura+ sobre Excel: Fluxogramas.

Durante o curso utilizamos o brModelo, mas o que nos levou a essa escolha? Essa ferramenta possui algumas vantagens como:

- permitir realizar alterações estruturais no modelo, conforme são tomadas novas decisões pela pessoa analista;
- trazer uma atenção especial aos atributos e todas as suas especificações;
- possibilitar uma visualização mais “limpa” do esquema ao ocultar os atributos que não tenham relevância no modelo conceitual, mas que são relevantes no modelo lógico, por exemplo;
- e possuir um dicionário de dados bem completo.

### Mini-Mundo

Existe um conceito chamado mini-mundo. O mini-mundo é considerado uma das etapas mais importantes do processo de modelagem dos dados, pois através desta etapa, entenderemos melhor como o banco de dados será estruturdo.

No nosso exemplo, fizemos algumas perguntas para a diretoria para entendermos quais são as informações mais importantes que deveriam ser armazenadas e anotamos em um documento:

- Queremos coletar os dados pessoais de nossos clientes, como se ele é pessoa física ou jurídica. No caso de PF o seu CPF e RG, e no caso de jurídica o CNPJ e IE. Além disso, queremos coletar e armazenar o seu nome, endereço, telefone e e-mail.

- O produto principal do e-commerce são livros. Estes livros têm informações associadas a eles como o título, categoria, o ISBN (International Standard Book Number), o ano de publicação, o valor, a editora que publicou o livro, bem como o autor ou autora da obra.

- Os livros são fornecidos por editoras. Precisamos ter guardados o telefone da editora, o nome de contato, o e-mail e no máximo 2 telefones.

- Sabemos que não podemos ter o mesmo livro vindo de várias editoras. O livro é exclusivo de uma editora.

- Nosso cliente pode comprar um ou mais livros através de um pedido de compra. Porém, sempre que ele faz uma compra precisamos verificar no estoque se o livro está ou não disponível antes de efetuar a operação.

A modelagem de dados é a base para se ter um bom projeto final do banco de dados. Uma das etapas mais importantes deste processo é a entrevista com os(as) clientes, na qual serão identificadas as regras de negócio do projeto. Quando não identificamos as necessidades do projeto, pode surgir novamente a necessidade de realizar esta etapa, gerando assim, atraso em todo o processo.

A entrevista dará todo o direcionamento ao nosso projeto. Através dela, conhecemos todos os detalhes do negócio e podemos estruturar os próximos passos. Um fator importante desse processo é saber de quem vamos colher as informações, ou seja, devemos entrevistar uma ou mais pessoas que possam passar todos os detalhes importantes do negócio.

Outro fator é escolher as perguntas ideais para definir todos os pontos-chaves do projeto. Nessa etapa, a pessoa que faz a entrevista precisa ter um conhecimento prévio sobre os pontos mais relevantes para a construção do projeto, o que possibilita coletar informações realmente essenciais para a modelagem do banco de dados.

Em resumo, a entrevista é a base para construir um projeto coerente e que atende às necessidades do(a) cliente.

### MER X DER

MER - Modelo Entidade Relacionamento.

- Modelo conceitual.
- Usado para descrever objetos, suas carcterísticas e como se relacionam.

DER - Diagrama Entidade Relacionamento.

- Representação gráfica do MER.
- Muitas vezes é usado como sinônimo.
- O diagrama facilita acomunicação entre todos.

O MER é um modelo conceitual usado para descrever os objetos (entidades) com suas características (atributos) e como elas se relacionam entre si (relacionamentos). Já o DER é uma representação gráfica que ajuda a visualizar as informações em situações práticas.

### O que são entidades

Entidade é um objeto único no mundo real.

Exemplo:

- Clientes de uma empresa;
- Carros que são vendidos;
- Departamento de vendas;
- Pode ser abstrata ou concreta.

Entidades são retângulos no diagrama.

### Entidade forte x fraca

- Entidade forte existe independentemente de outra entidade.
- Tem chave primária.

- Entidade fraca depende da existência de outra entidade.
- Não tem chave primária.

Entidade fraca vamos representar com um retangulo duplo.

Definimos quais são as entidades fracas e fortes. Por enquanto ficou:

Fortes:

- Clientes: Pois podemos sim ter clientes sem necessariamente ele fazer um pedido, exemplo quando um usuário se cadastra para receber notícias em seu email sobre ofertas.

- Editoras: Pois necessitamos das editoras para se ter os livros.

Fracas:

- Pedido: Pois precisamos de livros para se ter pedidos.

- Livros: Se precisamos de livros para ter pedidos, precisamos de editoras para ter livros.

- Estoque: Precisamos de livros também para ter estoque.

É sempre bom estra alinhado com a regra de negócio da empresa que você está modelando o banco de dados, pois pode acontecer de você pensar na modelagem de um jeito e depois que você tem uma conversa com o representante da empresa você pense diferente a modelagem. Então é bom estar sempre alinhado com a empresa.

### Relacionamento

Na modelagem o losango representa o relacionamento.

Temos o grau de relacionamento.

Relacionamento binário: 
    
    Colaborador(a)(retangulo) ---> Trabalha em (losango) ---> Função (retangulo)

Relacionamento ternário:
 
    Colaborador(a)(retangulo) ---> Trabalha em(losango) ---> Função(retangulo)
                                          ||
                                          \/
                                    Projeto 1(retangulo)

Relacionamento n-ário:

                                    Projeto 2(retangulo)
                                            /\
                                            ||
    Colaborador(a)(retangulo) ---> Trabalha em(losango) ---> Função(retangulo)
                                            ||
                                            \/
                                     Projeto 1(retangulo)


Os parenteses que aparece quando criamos um novo relacionamento significa cardinalidade.

Cardinalidade podemos dizer que é a conectividade, ou seja, tenho duas entidades que de alguma forma elas se conectam.

Cardinalidade 1:1
 
- Exemplo: Temos um gerente para cada área da empresa, podemos ter diversas áreas/departamentos, mas todas essas áreas teremos apenas 1 gerente por isso é 1:1.

Cardinalidade 1:n

- Exemplo: quando temos uma relação de departamento com funcionários. Temos um departamento onde podemos ter diversos funcionários, então por isso o 1:n.

Cardinalidade N:N

- Exemplo: podemos ter alguns livros em um pedido, mas podemos ter também o mesmo livro em diversos pedidos diferentes, por isso o N:N, pois é de muitos para muitos.








