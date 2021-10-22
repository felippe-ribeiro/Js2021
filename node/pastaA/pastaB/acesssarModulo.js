const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
const c = require('./pastaC')
console.log(c.ola2)

// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8070)