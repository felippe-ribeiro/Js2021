const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 554.55,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})