"use strict";

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var nomeDoAluno = prompt('Informe o nome do aluno');
var somaDasNotas = 0;

for (i = 0; i <= 3; i++) {
  var nota = Number(prompt('Informe a primeira nota do aluno'));
  somaDasNotas = somaDasNotas + nota;
}

var media = somaDasNotas / 4;

if (media >= 5) {
  console.log("Aluno ".concat(nomeDoAluno, " aprovado"));
} else {
  console.log("Aluno ".concat(nomeDoAluno, " reprovado"));
}

console.log(media); // var nota2 = rl.input('Informe a primeira nota do aluno');
// var nota3 = rl.input('Informe a primeira nota do aluno');
// var nota4 = rl.input('Informe a primeira nota do aluno');