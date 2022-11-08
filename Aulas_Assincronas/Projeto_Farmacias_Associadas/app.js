const stores = require('./database');

const readLine = require('readline-sync');

//input 
const inputUser = readLine.question('Deseja buscar um associado ?\n[S]im\n[N]ao\n');

//teste lógico - [REGRA DE NEGÓCIO]

var listOfCategory = [];
if (inputUser.toLocaleUpperCase() == 'S') {
    console.log("Essas são as categorias de associados disponíveis\n")

    for (let index = 0; index < stores.length; index++) {
        listOfCategory.push(stores[index].categoria);
    }
    var sortCategory = listOfCategory.filter((element, index) => listOfCategory.indexOf(element) === index);
    sortCategory.forEach((item) => console.log(item));

    const inputCategory = readLine.question("\nEscolha a categoria de associado\n");

    const result = stores.filter(store => store.categoria === inputCategory);

    console.table(result);

} else {
    const orderStores = stores.sort((a, b) => a.numeroDeLojas - b.numeroDeLojas);
    console.log("Esses são os associados listados")
    console.table(orderStores);
}