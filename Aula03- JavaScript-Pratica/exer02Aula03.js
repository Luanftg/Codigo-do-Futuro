/**
João precisa de um sistema que solicite 
o numero de inicio e 
o número final da operação
faça um programa que mostre somente os números pares entre os números digitados

Exemplo de execução:
Informe o primeiro número
1
Informe o número final
10
Números pares
2
4
6
8
10
 
*/

var numeroInicio = Number(prompt('Informe o primeiro número'));
var numeroFinal = Number(prompt('Informe o segundo número'));

for(numeroInicio;numeroInicio<=numeroFinal;numeroInicio++) {
    if (numeroInicio % 2 ==0) console.log(numeroInicio);
}