/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/

const soma = function(num1, num2){
  return num1 + num2;
}
exports.sum = soma;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
const nomecompleto  = function(nome, sobrenome){
    return nome + ' ' + sobrenome;
}
exports.fullname = nomecompleto;

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
const multiplicacao = function(num1, num2, num3){
    if(num1 != null && num2 != null && num3 != null){
    return (num1 * num2 * num3) + 2;
    }
    else{
        return 'Preencha todos os valores corretamente!';
    }
}
exports.calculate = multiplicacao;

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
const multiplicacaov2 = function(num1, num2, num3){
    let vetor = [num1, num2, num3];
    vetor = vetor.filter(valor => {
        if (valor != undefined){
            return true;
        }else{
            return false;
        }
    })

    if(vetor.length == 3){
        return (vetor[0] + vetor[1])/vetor[2]
    }else if(vetor.length == 2){
        return vetor[0] + vetor[1];
    }else if(vetor.length == 1){
        return vetor[0];
    }else{
        return false;
    }
}
exports.calculatev2 = multiplicacaov2;

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
const ehPar = function(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
exports.isPair = ehPar;
