/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
exports.sum = (arg1, arg2) => {
    return arg1 + arg2;
}

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
exports.fullname = (nome, sobrenome) => {
    return nome + ' ' + sobrenome;
}

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
exports.calculate = (arg1, arg2, arg3) => {
    if(arg1 && arg2 && arg3){
        return (arg1 * arg2 * arg3) + 2;
    }
    
    return "Preencha todos os valores corretamente!";
}
/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
exports.calculatev2 = (arg1, arg2, arg3) => {
    arg1 = arg1 || 0;
    arg2 = arg2 || 0;
    arg3 = arg3 || 0;
    
    if(arg1 && arg2 && arg3){
        return (arg1 + arg2) / arg3;
    }
    else if(arg1 || arg2 || arg3){
        return arg1 + arg2 + arg3;
    }
    
    return false;
}

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
exports.isPair = (arg) => {
    return arg % 2 == 0 ? true : false;
}
