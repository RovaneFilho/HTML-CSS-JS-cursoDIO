/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:

    - Á vista Débito, recebe 10% de desconto;
    - Á vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoProduto = 100;
let formaDePagamento = 'PIX';
let parcelas = 0;

if (formaDePagamento === 'Debito') {
    let valorFinal = precoProduto - (precoProduto * 0.10);
    console.log(`Ovalor a ser pago é R$ ${valorFinal.toFixed(2)}`)
} else if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'PIX') {
    let valorFinal = precoProduto - (precoProduto * 0.15);
    console.log(`Ovalor a ser pago é R$ ${valorFinal.toFixed(2)}`)
} else if (formaDePagamento === 'Credito' && parcelas <= 2) {
    console.log(`Ovalor a ser pago é R$ ${precoProduto.toFixed(2)}`)
} else if (formaDePagamento === 'Credito' && parcelas > 2) {
    let valorFinal = precoProduto + (precoProduto * 0.10);
    console.log(`Ovalor a ser pago é R$ ${valorFinal.toFixed(2)}`)
}