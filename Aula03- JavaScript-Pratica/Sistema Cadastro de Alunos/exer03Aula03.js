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




const appNotas = {};
// appNotas.nome = document.getElementById("nome").value;
// appNotas.matricula = document.getElementById("matricula").value;
// appNotas.notas = document.getElementById("notas").value;
// appNotas.formCadastroAluno = document.getElementById("formCadastroAluno");
// appNotas.listaAlunos = document.getElementById("listaAlunos");


class Aluno {
    constructor() {
        this.nome = '';
        this.matricula = '';
        this.notas = [];
    }

    somaDasNotas() {
        return this.notas.reduce((atual, proximo) => atual + proximo);
    }
    
    media() {
        return (this.somaDasNotas() / this.notas.length).toFixed(2);
    }

    situacao() {
        const mediaCalculada = this.media();
        if(mediaCalculada >= 7) return 'Aprovado';
        if (mediaCalculada > 5 && mediaCalculada <7) return 'Recuperação';
        return 'Reprovado';
    }
    
}


appNotas.listaDeAlunos = [];

appNotas.cadastrarAluno = () => {
    const aluno = new Aluno();
    
    aluno.nome = document.getElementById("nome").value;
    aluno.matricula = document.getElementById("matricula").value;
    aluno.notas = document.getElementById('notas').value.split(',');
    for(let i=0; i<aluno.notas.length;i++) {
        aluno.notas[i] = Number(aluno.notas[i]);
    }
    appNotas.listaDeAlunos.push(aluno);
    appNotas.esconderFormAluno();
    appNotas.mostrarAlunos();
}

appNotas.exibirRelatorio = () => {
    appNotas.listaDeAlunos.forEach(mostrarAlunos());
}


appNotas.mostrarAlunos = () => {
    let linhasHTML = "";
    for (let index = 0; index < appNotas.listaDeAlunos.length; index++) {
        let aluno = appNotas.listaDeAlunos[index];
        linhasHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.matricula}</td>
                <td>${aluno.notas.join(',')}</td>
                <td>${aluno.media()}</td>
                <td>${aluno.situacao()}</td>
            </tr>
        `
    }

    document.getElementById("tbody").innerHTML = linhasHTML;
}


appNotas.mostrarFormAluno = () => {
    formCadastroAluno.style.display = "block";
    appNotas.esconderListaAlunos();
}
appNotas.esconderFormAluno = () => {
    formCadastroAluno.style.display = "none";
    appNotas.mostrarListaAlunos();
}
appNotas.mostrarListaAlunos = () => {
    document.getElementById("listaAlunos").style.display = "block";
}
appNotas.esconderListaAlunos = () => {
    document.getElementById("listaAlunos").style.display = "none";
}
