var name = prompt("Informe o nome do cliente");
var alvejante = parseFloat(prompt("Informe o preço do Alvejante"));
var sabaoEmPo = parseFloat(prompt("Informe o preço do Sabão em pó"));
var sabonete = parseFloat(prompt("Informe o preço do Sabonete"));

var result = alvejante + sabaoEmPo + sabonete;

alert(`Ola ${name}, o valor da sua compra é de ${alvejante} + ${sabaoEmPo} + ${sabonete} =  ${result.toFixed(2)}`);
