/*1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um numero;
    - Mostrar de forma crescente atraves do console.log() os numeros existentes 
      de 1 até o numero passado como parametro, incluindo 1 e o numero passado como parametro.
*/
exports.showNumbers = function showNumbers(num1) {
    let num = 0;
    for (i = 0; i < num1 ;i++) {
        num += 1;
        console.log(num);
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
exports.showPairNumbers = function showPairNumbers(num){
    let numPar;
    for (i = 0; i < num ;i++) {
        if ( (i % 2) == 0 ) {
        numPar = i;
        console.log(numPar);
        }
    
    }
}

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array com numeros. Ex: [0,1,2,5,9,8,6,4];
    - Retornar um array apenas com os numeros que são pares;
    - Deve ser feito usando a função filter do array. Ex: numbers.filter(...).
*/
exports.filterPairNumbers = function filterPairNumbers(array){
    return array.filter(function(element) { return (element%2 == 0) })     
}