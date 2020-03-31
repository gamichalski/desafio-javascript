/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
function sum(num1, num2){
    return num1+num2
}
exports.sum = sum

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
function fullname(nome, sobrenome){
    nome_completo = `${nome} ${sobrenome}`
    return nome_completo
}
exports.fullname = fullname

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calculate(arg1, arg2, arg3){
    if ((!arg1) || (!arg2) || (!arg3)){
        return "Preencha todos os valores corretamente!"
    } else {
        resultado = (arg1*arg2*arg3)+2
        return resultado
    }
}
exports.calculate = calculate

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
function calculatev2(arg1, arg2, arg3){
    //Nenhum argumento passado
    if ((!arg1) && (!arg2) && (!arg3)){
        return false
    //Todos os arguentos foram passados 
    } else if ((arg1) && (arg2) && (arg3)){
        resultado = (arg1+arg2)/arg3
        return resultado
    //Somente um argumento for passado (arg1)
    } else if ((arg1) && (!arg2) && (!arg3)){
        return arg1
    //Somente um argumento for passado (arg2)
    } else if ((!arg1) && (arg2) && (!arg3)){
        return arg2
    //Somente um argumento for passado (arg3)
    } else if ((!arg1) && (!arg2) && (arg3)){
        return arg3
    //Dois argumentos forem passados (arg1 e arg2)        
    } else if ((arg1) && (arg2) && (!arg3)){
        return arg1+arg2
    //Dois argumentos forem passados (arg2 e arg3)        
    } else if ((!arg1) && (arg2) && (arg3)){
        return arg2+arg3
    //Dois argumentos forem passados (arg1 e arg3)        
    } else if ((arg1) && (!arg2) && (arg3)){
        return arg1+arg3
    }
}
exports.calculatev2 = calculatev2

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
function isPair(numero){
    conta = numero%2
    if (conta==0){
        return true
    } else{
        return false
    }
}
exports.isPair = isPair
