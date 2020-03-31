/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
const sum = (number1, number2) => number1 + number2;
exports.sum = sum;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(concatenacão) dos dois parametros passados e retonar o nome completo.
*/
const fullname = (firstname, lastname) => `${firstname} ${lastname}`;
exports.fullname = fullname;

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
const calculate = (number1, number2, number3) => {
    return number1 && number2 && number3 
    ? (number1 * number2 * number3) + 2 
    : "Preencha todos os valores corretamente!";
}
exports.calculate = calculate;

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
const calculatev2 = (number1, number2, number3) => {
    if (number1 && !number2 && !number3) {
        return number1;
    } else if(number1 && number2 && !number3) {
        return number1 + number2;
    } else if (number1 && number2 && number3) {
        return (number1 + number2) / number3;
    } 
    
    return false;
}
exports.calculatev2 = calculatev2;

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
const isPair = (number) => number % 2 === 0;
exports.isPair = isPair;