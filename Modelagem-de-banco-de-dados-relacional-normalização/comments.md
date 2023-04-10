# Iniciando curso

### Conceitos de normalização

- Diretrizes informais

- Anomalias

- Dependências funcionais

- Regras normais

### Diretrizes informais

- Semântica clara e esquemas fáceis de explicar.

- Evitar informações redundantes.

- Impossibilitar valores NULL nas tuplas.

- Atençao de surgimentos de tuplas falsas.

### Anomalias

Anomalias são inconsistências de dados. Incosustências nada mais é do que valores que deveriam ser iguais, mas são diferentes. Por exemplo: Temos a tabela de notas fiscais e recibos, o valor da compra deve ser igual em ambas as tabelas, se estiver diferente temos uma anomalia.

- Anomalias de Inserção

- Anomalias de Alteração

- Anomalias de Remoção

O processo de normalizar um banco de dados é um fator muito importante que pode fazer uma diferença relevante na implementação e utilização de um banco de dados. Porém, existem casos em que normalizar os dados pode surtir um efeito contrário.

A normalização dos dados é o processo utilizado para realizar a organização em um banco de dados. Ao realizar a normalização dos dados, alguns problemas podem ser evitados,como, por exemplo: eliminar a redundância dos dados, eliminar anomalias de inserção, atualização e exclusão.

Com a normalização, a estrutura do banco de dados projetada inicialmente poderá sofrer alterações, como o surgimento de novas tabelas. Porém, este processo garante uma maior organização dos dados, reduzindo assim, a manutenção e desperdício do espaço de armazenamento.

Para realizar a normalização algumas regras foram definidas. Essas regras são conhecidas como as formas normais e atualmente existem 5 formas normais que podem ser utilizadas no processo de normalização.

O conceito de normalização não se aplica a todos os tipos de bancos de dados. Os bancos de dados NoSQL, por exemplo, normalmente armazenam dados não estruturados e possuem uma estrutura de armazenamento bem diferente dos bancos de dados relacionais.

Normalmente o foco dos bancos de dados NoSQL é garantir uma maior velocidade de consulta, disponibilizando uma maior escalabilidade.Desta forma, as anomalias e redundância dos dados são toleradas em bancos de dados NoSQL.

### Dependência Funcional

Elas estabelece uma relação de atributos dentro da tabela.

O atributo que determina o valor é chamado dw Determinante. O outro atributo é chamado de Dependente.

Para uma tabela estar em uma determinada forma normal, ela precisa satisfazer algumas propriedades baseadas nas dependências funcionais.

Dependências funcionais são restrições aplicadas sobre atributos e ocorrem quando um atributo determina exclusivamente outro atributo. Cada forma normal deve satisfazer as propriedades de uma determinada dependência. Assim sendo:

A primeira forma normal deve satisfazer as propriedades baseadas na dependência funcional.

A segunda forma normal deve satisfazer as propriedades baseadas na dependência funcional parcial.

A terceira forma normal deve satisfazer as propriedades baseadas na dependência transitiva.

A forma normal de Boyce-Codd deve satisfazer as propriedades baseadas na dependência funcional trivial.

A quarta forma normal deve satisfazer as propriedades baseadas na dependência Multivalorada.

A quinta forma normal deve satisfazer as propriedades baseadas na dependência junção.

