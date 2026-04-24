let precoProduto = 100;
let formaDePagamento = 'Credito';
let parcelas = 6;

function valorFinalPago(precoProduto, formaDePagamento, parcelas) {
    if (formaDePagamento === 'Debito') {
        let valorFinal = precoProduto - (precoProduto * 0.10);
        console.log(`O valor a ser pago é R$ ${valorFinal.toFixed(2)}`)
    } else if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'PIX') {
        let valorFinal = precoProduto - (precoProduto * 0.15);
        console.log(`O valor a ser pago é R$ ${valorFinal.toFixed(2)}`)
    } else if (formaDePagamento === 'Credito' && parcelas <= 2) {
        console.log(`O valor a ser pago é R$ ${precoProduto.toFixed(2)}`)
    } else if (formaDePagamento === 'Credito' && parcelas > 2) {
        let valorFinal = precoProduto + (precoProduto * 0.10);
        console.log(`O valor a ser pago é R$ ${valorFinal.toFixed(2)}`)
    }
}

valorFinalPago(precoProduto, formaDePagamento, parcelas);