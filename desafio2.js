/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
exports.sum = function(valor1, valor2) {
    return valor1 + valor2;
}

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
exports.fullname = function(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
exports.calculate = function(valor1, valor2, valor3) {
    if(valor1 == null || valor2 == null || valor3 == null) {
        return "Preencha todos os valores corretamente!";
    }

    return valor1 * valor2 * valor3 + 2;
}

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
exports.calculatev2 = function(valor1, valor2, valor3) {
    if(valor1 == null && valor2 == null && valor3 == null) {
        return false;
    }

    if(valor2 == null && valor3 == null) {
        return valor1;
    }

    if(valor3 == null) {
        return valor1 + valor2;
    }

    return (valor1 + valor2)/valor3;
}

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
exports.isPair = function(valor) {
    return valor % 2 == 0;
}
