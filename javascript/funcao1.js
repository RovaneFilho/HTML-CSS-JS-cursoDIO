function escreverNome(nome) {
    console.log('Meu nome é ' + nome);
}

escreverNome('Rovane');
escreverNome('Jonas');

function verificarIdade(idade) {
    if (idade >= 18 ){
        console.log(`Você tem ${idade} anos, Você é maior de idade!`);
    } else {
        console.log(`Você tem ${idade} anos, Você é menor de idade!`);
    }
}

verificarIdade(20);
verificarIdade(15);