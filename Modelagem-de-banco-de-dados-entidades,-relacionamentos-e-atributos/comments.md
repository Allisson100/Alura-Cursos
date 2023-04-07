# Começando curso

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
