    minlength="4"
    maxlength="14"

Esses comando servem para limitar a quantidade de cractere já no html.

É só colocar esses valores na tag de input por exemplo.

Nesse caso ele limitaria o campo com no mínimo 4 catracteres e no máximo 14 caracteres.

### Tipos de input

button - Define um botão clicável;
number - Define um campo para número inteiro;
text - Define um campo para texto que permite também números e caracteres especiais;
date - Define um campo para data;
checkbox - Define uma caixa de seleção para múltiplas opções;
radio - Define uma caixa de seleção para opção única;
password - Define um campo de senha;
submit - Define um botão para enviar os dados;
tel - Define um campo para telefone.

--------------------------

    pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"

O pattern ele basicamente define um padrão no campo de input, no nosso caso utilizamos no campo de CPF e essa expressão acima signifca que primeiro teremos 3 digitos de 0 à 9, depois poderemos ter um ponto, sendo ele opcional, depois mais três digitos de 0 a 9, depois outro ponto opcional, depois mais três digitos, depois um  hífen que também é opcional e por fim dois digitos.

Isso se chama expressões regulares.

--------------------------

    export default function ehUmCPF(campo) {
        const cpf = campo.value.replace(/\.|-/g, "");
        validaNumerosRepetidos(cpf);

        console.log(validaNumerosRepetidos(cpf));
    }

    function validaNumerosRepetidos(cpf) {
        const numerosRepetidos = [
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999'
        ]

        return numerosRepetidos.includes(cpf);
    }

Nós utilizamos um array chamado numerosRepetidos para saber se o cpf não tem os 11 números repetidos.

E depois usamos o numerosRepetidos.includes(cpf). Essa função ela retorna true ou false, ou seja, ela vai comparar os numero repetidos com o número de cpf que foi passado como parâmetro, caso o número do cpf for igual a algum presente no array numerosRepetidos então ele vai retornar true e com isso conseguimos fazer uma verificação.

--------------------------

