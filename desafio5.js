/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma ingrediente. Ex: Queijo;
    - Importar a lista de ingredientes do arquivo ingredients.js;
    - Filtrar a palavra passada como argumento dentro da lista de ingredientes;
    - Retornar "Encontrado" se a palavra for encontrada e "Não encontrado" se não for encontrada;
    - A pesquisa deve desconsiderar se o ingrediente contém letras maiúsculas, ou seja;
      - Se pesquisar: Queijo, queijo ou QuEiJo. O resultado deve ser "Encontrado"
*/

exports.ingredientsFilter = (ingredient) => {
    const ingredients = require('./ingredients.js');
    return ingredients.find(e => e.toLowerCase() == ingredient.toLowerCase()) ? "Encontrado" : "Não Encontrado";
};
