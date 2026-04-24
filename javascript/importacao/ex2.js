
/*
    2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
    Imprima o maior número par e o menor número impar.

    exemplo: 
    entrada: 5, 3, 4, 1, 10, 8
    saida: mairor número par: 10
    menor número impar: 1
*/


const {gets, print} = require('./funcoesex2');


let valorPar = 0;
let valorImpar = 0;

for(let i = 0; i < 6; i++) {
    const valor = gets();
    
    
    
    if(valor % 2 === 0) {   
        if (valorPar < valor) {
            valorPar = valor;
        }
    } else {
        if (valorImpar === 0 || valorImpar > valor) {
            valorImpar = valor;
        }
    }
        
} 

print(`Maior número par: ${valorPar}`);
print(`Menor número impar: ${valorImpar}`);
