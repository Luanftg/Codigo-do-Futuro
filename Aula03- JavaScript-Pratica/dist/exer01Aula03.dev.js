"use strict";

//Biana é uma pessoa muito indecisa e precisa juntar dinheiro para conseguir, em suas férias , viajar.
//Ela terá algumas opções:
//Disney = R$ 15.000,00
//Madrid = R$ 12.000,00
//MAceió = R$ 8.000,00
// Ribeirão Preto = R$ 5.000,00
//Faça um programa que solicite
// o nome do usuário,
// o valor que o usuário possui para a viagem
// a viagem que o usuário deseja e
//mostre no final do programa se o usuário pode viajar ou não, 
//Se ele não puder viajar , mostre o quanto falta para o mesmo economizar
var nome = prompt('Informe o seu nome');
var valor = parseInt(prompt('Informe o valor disponível para realizar sua viagem'));
debugger;

do {
  var local = parseInt(prompt("Informe o local desejado para realizar sua viagem. Digite:\n    1- Disney\n    2- Madrid\n    3- Macei\xF3\n    4- Ribeir\xE3o Preto"));
} while (local > 4 || local <= 0);

var response = 0;

switch (local) {
  case 1:
    response = valor - 15000;
    break;

  case 2:
    response = valor - 12000;
    break;

  case 3:
    response = valor - 8000;
    break;

  case 4:
    response = valor - 5000;
    break;
}

if (response >= 0) {
  alert('Você pode ir viajar!');
} else {
  alert("Voc\xEA ainda n\xE3o pode ir viajar. Para isso precisa juntar R$ ".concat(Math.abs(response), " ,00 reais."));
}