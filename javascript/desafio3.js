/*
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Media menor que 5, reprovação;
    - Media entre 5 e 7, recuperação;
    - Media acima de 7, passou de semestre;
*/ 

let nota1 = 8;
let nota2 = 2;
let nota3 = 1;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`Sua média é ${media.toFixed(2)}, esta Reprovado!`)
} else if (media >= 5 && media <= 7){
    console.log(`Sua média é ${media.toFixed(2)}, esta em Recuperação!`)
} else if (media > 7) {
    console.log(`Sua média é ${media.toFixed(2)}, esta Aprovado!`)
}