/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: Anderson;
    - Retornar a palava invertida. Ex: nosrednA
*/
const invertePalavra = function(palavra){
    return palavra.split('').reverse().join('');
}

exports.invertWord = invertePalavra;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: ana;
    - Deve retornar true se a palavra for um palindromo;
    - Deve desconsiderar se a letra é maiuscula ou minuscula.
*/
const ehPalindromo = function(palavra){
    if (palavra == palavra.split('').reverse().join('')){
        return true;
    }
}
exports.isPalindrome = ehPalindromo;

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array de frutas. Ex: ['maça','banana'];
    - Deve inserir 'kiwi' no final do array;
    - Deve remover o primeiro item do array;
    - Deve inserir 'goiaba' no inicio no array;
    - Deve retornar o resultado;
  OBS: Devem ser utilizados as funções necessarias de manipulação de array (push, shift, unshift, ...)
*/
const frutas = function(vetor = ['maça', 'banana']){
    vetor.push('kiwi');
    vetor.shift();
    vetor.unshift('goiaba');
    return vetor;
}
exports.fruits = frutas;