//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Nome',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolaar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 30}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Ribeiro'
delete pessoa.nome
pessoa.nome = 'Pode mudar value'
console.log(pessoa)

//Object.freeze = selado + value não muda
