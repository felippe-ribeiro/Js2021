const fs = require('fs')
//dirname representa o diretório atual
const caminho = __dirname + '/arquivo.json'

//sincrono - não interessante esse modolo pois tempo resp. consideravel
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono..
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})