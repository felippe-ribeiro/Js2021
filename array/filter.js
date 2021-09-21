const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad', preco: 4000, fragil: true},
    { nome: 'Copo Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo Plastico', preco: 18.99, fragil: false}
]

console.log('---------')
console.log(produtos.filter(function(p){
    return false // com isso filtra tdo nada aparece
}))
console.log('---------')
console.log(produtos.filter(function(p){
    return true // tudo aparece
}))
console.log('---------')
console.log(produtos.filter(function(p){
    return p.preco > 2400
}))
console.log('---------')
//chamar caros e frágil
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

