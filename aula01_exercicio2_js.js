var name = prompt("Informe o nome do cliente");
var alvejante = prompt("Informe o preço do Alvejante");
var sabaoEmPo = prompt("Informe o preço do Sabão em pó");
var sabonete = prompt("Informe o preço do Sabonete");

var result = alvejante + sabaoEmPo + sabonete;

alert(`Ola ${name}, o valor da sua compra é de ${alvejante} + ${sabaoEmPo} + ${sabonete} =  ${result}`);
