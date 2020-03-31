/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um numero;
    - Mostrar de forma crescente atraves do console.log() os numeros existentes 
      de 1 até o numero passado como parametro, incluindo 1 e o numero passado como parametro.
*/
const showNumbers = (number) => {
    for(let i = 1; i <= number; i++) {
        console.log(i);
    }
}
exports.showNumbers = showNumbers;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um numero. Ex: 6;
    - Mostrar atraves do console.log() quais são so numeros pares existentes 
      entre 0 e o numero recebido, incluindo o proprio numero se ele for par. Ex: 
      - console.log(0);
      - console.log(2);
      - console.log(4);
      - console.log(6);
    - Deve ser feito atraves de um loop;
    - O numero ao ser identificado como par, deve ser imetiatamente mostrado.
*/
const showPairNumbers = (number) => {
    for(let i = 0; i < number; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}
exports.showPairNumbers = showPairNumbers;

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array com numeros. Ex: [0,1,2,5,9,8,6,4];
    - Retornar um array apenas com os numeros que são pares;
    - Deve ser feito usando a função filter do array. Ex: numbers.filter(...).
*/
const filterPairNumbers = (numbers) => numbers.filter(number => number % 2 === 0);
exports.filterPairNumbers = filterPairNumbers;
