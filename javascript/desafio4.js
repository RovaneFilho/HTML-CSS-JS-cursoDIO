/*
    2) O IMC - Indice de Massa Corporal é um criterio da Organização Mundial de Saude para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

let peso = 75;
let altura = 1.70;

let imc = peso / Math.pow(altura, 2); // Math.pow(altura, 2) é o mesmo que altura * altura , eleva o primeiro valor ao segundo valor

if (imc < 18.5) {
    console.log(`Seu IMC atual é ${imc.toFixed(2)}, voce está abaixo do peso.`)
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC atual é ${imc.toFixed(2)}, voce está com peso normal.`)
} else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC atual é ${imc.toFixed(2)}, voce está acima do peso.`)
} else if (imc >= 30 && imc <= 40) {
    console.log(`Seu IMC atual é ${imc.toFixed(2)}, voce está Obeso.`)
} else if (imc > 40) {
    console.log(`Seu IMC atual é ${imc.toFixed(2)}, voce está com obesidade grave.`)
}