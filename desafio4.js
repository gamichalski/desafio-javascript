/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: Anderson;
    - Retornar a palava invertida. Ex: nosrednA
*/
const invertWord = (word) => word.split('').reverse().join('');
exports.invertWord = invertWord;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: ana;
    - Deve retornar true se a palavra for um palindromo;
    - Deve desconsiderar se a letra é maiuscula ou minuscula.
*/
const isPalindrome = (word) => {
    return (word.toUpperCase() == word.split('').reverse().join('').toUpperCase())
        ? true
        : false;
}
exports.isPalindrome = isPalindrome;

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array de frutas. Ex: ['maça','banana'];
    - Deve inserir 'kiwi' no final do array;
    - Deve remover o primeiro item do array;
    - Deve inserir 'goiaba' no inicio no array;
    - Deve retornar o resultado;
  OBS: Devem ser utilizados as funções necessarias de manipulação de array (push, shift, unshift, ...)
*/
const fruits = (array) => {
    array.push('kiwi');
    array.shift();
    array.unshift('goiaba');
    return array;
}
exports.fruits = fruits;