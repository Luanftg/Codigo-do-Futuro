/**
 * Francisco precisa de um sistema para gerenciar sua escola
 * neste sistema precisamos capturar o aluno com as seguintes informações:
 * aluno
 *  - nome
 *  - matricula
 *  - notas
 * 
 * as notas podem ser quantas o sistema quiser, ou seja deixe o usuário escolher a qauntidade de notas 
 * 
 * neste sistema você irá precisar de um menu onde irá fazer o:
 * Cadastro de alunos, digitando nome e matricula e notas
 * Um relatório onde irá mostrar a lista de alunos com nome , matricula, notas , média , aprovado/reprovado/recuperação
 * Critérios:
 * se a nota for >= 7 aprovado
 * se a nota for entre 5 e menor que 7 Recuperação
 * se a nora for menor que 5 Reprovado
 */

var listaDeAlunos = [];

class Aluno {
    nome;
    matricula;
    notas = [];
    media;
}

var menu;
do {
    menu = parseInt(prompt(`
    Bem vindo ao Sistema de gerenciamento de alunos!
    Digite uma opção válida:
    0- Sair.
    1- Cadastrar um aluno.
    2- Exibir relatório de alunos.
    `));
    if(menu == 0) {
        break;
    } else if (menu ==1) {
        cadastrarAluno();
        menu = 4;
    } else if (menu ==2) {
        exibirRelatorio();
        menu =4;
    }
   
    
    
} while(menu < 0 || menu > 3 );


function cadastrarAluno() {
    var aluno = new Aluno();
    aluno.nome = prompt('Informe o nome do aluno');
    aluno.matricula = prompt('Informe a matrícula');
    let nota= 0.0;
    do {
        nota = Number(prompt('Informe a nota do aluno'));
        if (nota >=0)  aluno.notas.push(nota);
    } while (nota > 0);

    listaDeAlunos.push(aluno);
}

function exibirRelatorio() {

    for(let i = 0; i < listaDeAlunos.length; i++) {
       
       var media = listaDeAlunos[i].notas.reduce((proximo, atual)=> proximo+atual) / listaDeAlunos[i].notas.length;
       if(media >= 7) {
        listaDeAlunos[i].media = 'Aprovado';
       } else if ( media > 5 && media <7) {
        listaDeAlunos[i].media = 'Recuperação';
       }else {
        listaDeAlunos[i].media = 'Reprovado';
       }
    }
    
    listaDeAlunos.forEach((aluno)=> alert(`
    nome do aluno: ${aluno.nome}
    matrícula: ${aluno.matricula}
    notas: ${aluno.notas}
    media: ${aluno.media}
    `));

}