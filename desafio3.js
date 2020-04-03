/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um numero;
    - Mostrar de forma crescente atraves do console.log() os numeros existentes 
      de 1 até o numero passado como parametro, incluindo 1 e o numero passado como parametro.
*/
function showNumbers(num){
    for (let count = 1; count <=num; count++){
        console.log(count)
    }
}
exports.showNumbers = showNumbers

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

function showPairNumbers (num) {
    for (let count = 0; count <num; count++){
        result = count%2
        if (result==0){
            console.log(count)
        }
    }
}
exports.showPairNumbers = showPairNumbers

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array com numeros. Ex: [0,1,2,5,9,8,6,4];
    - Retornar um array apenas com os numeros que são pares;
    - Deve ser feito usando a função filter do array. Ex: numbers.filter(...).
*/
function filterPairNumbers (array){
    const arrayPar = array.filter((par) => {
         return par%2 == 0
    })

    return arrayPar
}
exports.filterPairNumbers = filterPairNumbers
