
/*const pessoa = {
    nome: 'Vitor j guerra',
    idade: 25,

    descrever: function() {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2026 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

vitor.descrever();
renan.descrever();