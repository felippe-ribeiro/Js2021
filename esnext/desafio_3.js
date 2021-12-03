const fs = require('fs')
const path = require('path')


function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Estou depois da função de ler o arquivo')
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `Valor final após interpolação é ${conteudo}`)
    .then(console.log)