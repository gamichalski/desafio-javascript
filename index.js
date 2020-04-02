/*
 Esse arquivo pode ser utilizado para você testar as funções criadas nos desafios.
 Por exemplo:
*/

const desafio1 = require('./desafio1.js');
console.log(desafio1.name);
console.log(desafio1.sum());
console.log(desafio1.numbers);
console.log(desafio1.isBeautiful);

const desafio2 = require('./desafio2.js');
console.log(desafio2.sum(5,8));
console.log(desafio2.fullname('Lucas', 'Peruchi'));
console.log(desafio2.calculate(3, 5, 8)); 
console.log(desafio2.calculatev2(1));
console.log(desafio2.isPair(10000001));

const desafio3 = require('./desafio3.js');
desafio3.showNumbers(5);
desafio3.showPairNumbers(10);
desafio3.filterPairNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,18,20,22]);

const desafio4 = require('./desafio4.js');
console.log(desafio4.invertWord('socorram me subi no onibus em marrocos'));
console.log(desafio4.isPalindrome('arara'));
console.log(desafio4.fruits(['maçã', 'banana']));

const desafio5 = require('./desafio5.js');
console.log(desafio5.ingredientsFilter('BaNanA'));