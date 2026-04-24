/* 
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao jose para dizer o valor do seu IMC
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalcularImc() {
        return this.peso / (this.altura * this.altura)
    }

    classificarImc() {
        const imc = this.CalcularImc();

        if (imc < 18.5) {
            return(`Seu IMC atual é ${imc.toFixed(2)}, voce está abaixo do peso.`)
        } else if (imc >= 18.5 && imc < 25) {
            return(`Seu IMC atual é ${imc.toFixed(2)}, voce está com peso normal.`)
        } else if (imc >= 25 && imc < 30) {
            return(`Seu IMC atual é ${imc.toFixed(2)}, voce está acima do peso.`)
        } else if (imc >= 30 && imc <= 40) {
            return(`Seu IMC atual é ${imc.toFixed(2)}, voce está Obeso.`)
        } else if (imc > 40) {
            return(`Seu IMC atual é ${imc.toFixed(2)}, voce está com obesidade grave.`)
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);

console.log(jose.classificarImc());