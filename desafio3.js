/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um numero;
    - Mostrar de forma crescente atraves do console.log() os numeros existentes 
      de 1 até o numero passado como parametro, incluindo 1 e o numero passado como parametro.
*/
exports.showNumbers = (arg) => {
    for(let i = 1; i <= arg; i++){
        console.log(i);
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
exports.showPairNumbers = (arg) => {
    for(let i = 0; i < arg; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array com numeros. Ex: [0,1,2,5,9,8,6,4];
    - Retornar um array apenas com os numeros que são pares;
    - Deve ser feito usando a função filter do array. Ex: numbers.filter(...).
*/
exports.filterPairNumbers = (arg) => {
    return arg.filter(x => {
        if(x % 2 == 0){
            return x;
        }
    });
}
