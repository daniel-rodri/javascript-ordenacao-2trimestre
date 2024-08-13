const livros = require('./ListarLivros')

function menorValor(arrProdutos,posicaoInicial){

let MaisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual ++){
        if (arrProdutos[atual].preco < arrProdutos[MaisBarato].preco){
         MaisBarato = atual;
    }
  };  
  return MaisBarato;
}

module.exports = menorValor