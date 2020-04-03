/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
exports.sum = function sum(param1, param2) {
                    let sum = param1 + param2;
                    return sum;
                }


/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
exports.fullname = function fullname(param1, param2){
    let fullname = `${param1.trim()} ${param2.trim()}`;
    return(fullname);
}

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
exports.calculate = function calculate(val1, val2, val3){
    let mult = val1 * val2 * val3 + 2;
    if (!mult){
        mult = "Preencha todos os valores corretamente!";
    }
    return(mult)
}

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
exports.calculatev2 = function calculatev2(val1, val2, val3) {
    let resposta = (val1 + val2)/val3;
    if (!val1 && !val2 && !val3) {
        resposta = false;
    }else if(!val2 && !val3) {
        resposta = val1; 
    }else if (!val3) {
        resposta = val1 + val2; 
    }
    return resposta;
}

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
exports.isPair = function isPair(val1) {
    let numPar = false;
    if ( (val1 % 2) == 0 ) {
        numPar = true;
    }
    return(numPar);
}