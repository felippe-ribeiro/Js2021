Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i =0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad', preco: 4000, fragil: true},
    { nome: 'Copo Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo Plastico', preco: 18.99, fragil: false}
]


//chamar caros e frágil
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter(fragil))
