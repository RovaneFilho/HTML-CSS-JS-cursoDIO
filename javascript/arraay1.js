
//const alunos = ['João','Vitor','Marina'];

//alunos.push('Renan'); //adiciona ao final da lista

//alunos[2] = 'Vinicius'; // adiciona na posiçao ordenada em[]

//console.log(alunos);

const notas = [];

notas.push(6);
notas.push(8);
notas.push(5);
notas.push(3);
notas.push(4);
notas.push(8);

/*const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / 5);*/

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]; 
    soma = soma + nota;
}

const media = soma / notas.length;

console.log(media);