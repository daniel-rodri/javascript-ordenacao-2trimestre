const livros = require('./ListarLivros')

let MaisBarato = 0;

for (let atual = 0; atual < livros.length; atual ++){
    if (livros[atual].preco < livros[MaisBarato].preco){
        MaisBarato = atual;
    }
    // console.log(livros[MaisBarato].preco);
};

console.log(`o livro mais barato e ${livros[MaisBarato].preco} e o titulo e ${livros[MaisBarato].titulo}`)