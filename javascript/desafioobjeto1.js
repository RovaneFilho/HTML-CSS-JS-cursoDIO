/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilometro rodade.
    Crie um metódo que dado a quantidade de quilometros e o preço do combbustive nos de o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoKmPorLitro;

    constructor (marca, cor, gastoKmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.gastoKmPorLitro = gastoKmPorLitro;
    }

    calcularGastoDePercurso(distancia, precoCombustivel) {
        return distancia * this.gastoKmPorLitro * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));
