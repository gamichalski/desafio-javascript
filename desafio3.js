/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um numero;
    - Mostrar de forma crescente atraves do console.log() os numeros existentes 
      de 1 até o numero passado como parametro, incluindo 1 e o numero passado como parametro. 3
*/

const mostreNumeros = function(num){
    let i;
    for(i = 1; i <= num; i++){
        console.log(i);
    }
}
exports.showNumbers = mostreNumeros;

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
    - O numero ao ser identificado como par, deve ser imetiatamente mostrado. 2
*/

const numerosPares = function(num){
    let i;
    for(i = 0; i < num; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
exports.showPairNumbers = numerosPares;
/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array com numeros. Ex: [0,1,2,5,9,8,6,4];
    - Retornar um array apenas com os numeros que são pares;
    - Deve ser feito usando a função filter do array. Ex: numbers.filter(...). 3
*/
const filtrarNumeroPar = function(vetor = [0, 1, 2, 5, 9, 8, 6, 4]){
    return vetor.filter(valor => valor % 2 == 0);
}

exports.filterPairNumbers = filtrarNumeroPar;