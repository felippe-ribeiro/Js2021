//ideia é mapear um array para outro elemento
const nums = [1,2,3,4,5]

//For com propósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado, nums)


//criado as funções e armazenada nas var para usar no map
const soma10 = e => e + 10 //return implicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)