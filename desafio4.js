/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: Anderson;
    - Retornar a palava invertida. Ex: nosrednA
*/
function invertWord(arg1) {
    return arg1.split('').reverse().join('')
}
exports.invertWord = invertWord

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: ana;
    - Deve retornar true se a palavra for um palindromo;
    - Deve desconsiderar se a letra é maiuscula ou minuscula.
*/
function isPalindrome (arg1){
    arg1 = arg1.toLowerCase()
    for (let count = 0; count < (arg1.length/2); count++){
        if (arg1[count] != arg1[arg1.length - 1 - count]){
            return false
        }
    }
    return true
}
exports.isPalindrome = isPalindrome

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array de frutas. Ex: ['maça','banana'];
    - Deve inserir 'kiwi' no final do array;
    - Deve remover o primeiro item do array;
    - Deve inserir 'goiaba' no inicio no array;
    - Deve retornar o resultado;
  OBS: Devem ser utilizados as funções necessarias de manipulação de array (push, shift, unshift, ...)
*/
function fruits (arg1){
    //insere no final
    arg1.push("kiwi")
    //remove do inicio
    arg1.shift()
    //insere no inicio
    arg1.unshift("goiaba")
    return arg1

}
exports.fruits = fruits