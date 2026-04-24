
let valorEtanol = 4.35;
let valorGasolina = 6.87;
let combustiveDoCarro = 'Gasolina';
let kmPorLitro = 10;
let distancia = 142;

if (combustiveDoCarro === 'Etanol') {
    let valorGasto = (distancia / kmPorLitro) * valorEtanol;
    console.log(`O valor gasto da viagem é de  R$ ${valorGasto.toFixed(2)}`);
} else if (combustiveDoCarro === 'Gasolina') {
   let valorGasto = (distancia / kmPorLitro) * valorGasolina;
    console.log(`O valor gasto da viagem é de  R$ ${valorGasto.toFixed(2)}`); 
}