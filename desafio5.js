/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma ingrediente. Ex: Queijo;
    - Importar a lista de ingredientes do arquivo ingredients.js;
    - Filtrar a palavra passada como argumento dentro da lista de ingredientes;
    - Retornar "Encontrado" de a palavra for encontrada e "Não encontrada" se não for encontrada;
    - A pesquisa deve desconsiderar se o ingrediente contem letras maiusculas, ou seja;
      - Se pesquisar: Queijo, queijo ou QuEiJo. O resultado deve ser "Encontrado"
*/
function ingredientsFilter(arg1){
    const lista = require('./ingredients.js')
    arg1 = arg1.toLowerCase()

    //Pelo que eu entendi, se usar find ou filter o retorno vai ser um array. Logo, não posso usar dessa forma
    
    /*
    const itemFilterObj = lista.find((ingrediente) => {
        if (ingrediente.includes(arg1)){
            return "Encontrado"
        }
    });
    
    return itemFilterObj
    
    */

    //Assim, é necessário fazer pela forma mais "verbosa"

    for (let count in lista){
        lista[count] = lista[count].toLowerCase();
        if (lista[count] == arg1){
            return "Encontrado"
        }
    }
    return "Não Encontrado"
    
    
}
exports.ingredientsFilter = ingredientsFilter