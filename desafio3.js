/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um numero;
    - Mostrar de forma crescente atraves do console.log() os numeros existentes 
      de 1 até o numero passado como parametro, incluindo 1 e o numero passado como parametro.
*/
exports.showNumbers = (number) => {

    if(typeof number === 'number') {

        for(let index = 1; index <= number; index++) {

            console.log(index);            
        }
    }
}

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
exports.showPairNumbers = (number) => {

    if (typeof number === 'number') {

        for(let index = 0; index < number; index += 2) {

            console.log(index);
        }        
    }
}

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array com numeros. Ex: [0,1,2,5,9,8,6,4];
    - Retornar um array apenas com os numeros que são pares;
    - Deve ser feito usando a função filter do array. Ex: numbers.filter(...).
*/
exports.filterPairNumbers = (arr) => {

    return arr.filter(number => !(number%2));
}
