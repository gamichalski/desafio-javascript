// 1. Declare uma nova variável chamada `name` com o nome `Anderson` e exporte ela como `name`.
const name = 'Anderson';

// 2. Declare uma nova variável chamada `soma`, adicione uma instrução somando os valores 15 e 8, e exporte ela como `sum`.
const soma = 15 + 8;

// 3. Declare uma nova variável chamada `numbers` e atribua um array com os numeros de '1',  '5' e '10', e exporte ela como `numbers`.

const numbers = [1,5,10];

// 4. Declare uma nova variável chamada `isBeautiful` atribua à ela o valor booleano que representa `verdadeiro`, e exporte ela como `isBeautiful`.
const isBeautiful = true;


module.exports = {
    name,
    sum: soma,
    numbers,
    isBeautiful
}