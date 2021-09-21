const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//retornar array com os preços apenas

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const apenasNome = produto => produto.nome

const resultado2 = carrinho.map(paraObjeto).map(apenasNome)
console.log(resultado2)
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)