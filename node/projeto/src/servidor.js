const porta = 3003

const express = require('express')
const app = express()

/* app.get('/produtos', (req, res, next)=>{
    console.log('Middleware 1...')
    next()
}) */
// se ao inves de get usar use ele serve para todas as requisições mesmo sem url
app.get('/produtos', (req, res, next)=>{
    res.send({nome: 'Notebook', preco: 123.45}) // converte para JSON
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta de rede ${porta}.`)
})