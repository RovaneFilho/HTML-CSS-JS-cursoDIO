/*
    3) Faça um programa que calcule e imprima o salario a ser transferido para um funcionario.
    Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios
    O salario a ser transferido e calculado da seguinte maneira:

     Valor bruto do salario - percentural de imposto mediante a aixa salarial + adicionais dos beneficios

     para calcular o percentual de imposto segue as aliquotas: 

     de R$ 0.0 a R$ 1100.00 = 5%
     de R$ 1100.01 a R$ 2500.00 = 10%
     maior que R$ 2500.00 = 15% 
*/




const {gets, print} = require('./funcoesex3'); 





let salarioBruto = gets();
let beneficios = gets();

if (salarioBruto <= 1100) {
    let salarioLiquido = salarioBruto - (salarioBruto * 0.05) + beneficios;
    print(`O valor a receber é de R$${salarioLiquido}`);
} else if (salarioBruto >1100 && salarioBruto <= 2500) {
    let salarioLiquido = salarioBruto - (salarioBruto * 0.10) + beneficios;
    print(`O valor a receber é de R$${salarioLiquido}`);
} else if (salarioBruto > 2500) {
    let salarioLiquido = salarioBruto - (salarioBruto * 0.15) + beneficios;
    print(`O valor a receber é de R$${salarioLiquido}`);
} else {
    print('Valor inválido');
}

