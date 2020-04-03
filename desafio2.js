/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
exports.sum = (number1, number2) => number1 + number2;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
exports.fullname = (nome, sobrenome) => `${nome} ${sobrenome}`;

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
exports.calculate = (number1, number2, number3) => {
    if(number1 == null || number2 ==null || number3 == null){
        return "Preencha todos os valores corretamente!";
    }

    return (number1 * number2 * number3) + 2;
}

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
exports.calculatev2 = (var1, var2, var3) => {

    if(var1 == undefined && var2 == undefined && var3 == undefined){
        return false;
    }

    if(var1 && !var2 && !var3){
        return var1;
    }

    if(var1 && var2 && !var3){
        return var1 + var2;
    }
    
    if(var1 && var2 && var3){
        return (var1 + var2) / var3;
    }

}

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
exports.isPair = (number) => {
    if(number % 2 == 0){
        return true;
    }

    return false;
}
