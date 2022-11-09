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
debugger
do {

    var local = parseInt(prompt(`Informe o local desejado para realizar sua viagem. Digite:
    1- Disney
    2- Madrid
    3- Maceió
    4- Ribeirão Preto`));
}
while ((local > 4) || local <= 0);

var response = 0;
switch (local) {
    case 1:
        response = valor - 15000
        break;
    case 2:
        response = valor - 12000
        break;
    case 3:
        response = valor - 8000
        break;
    case 4:
        response = valor - 5000
        break;

}

if (response >= 0) {
    alert('Você pode ir viajar!');
} else {
    alert(`Você ainda não pode ir viajar. Para isso precisa juntar R$ ${Math.abs(response)} ,00 reais.`);
}