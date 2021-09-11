const valor = 1
const isTrue = true
const isFalse = 0
//para saber se um é verdadeiro vc nega 2 vezes
console.log(!!valor)
console.log(!!isFalse)
console.log(isTrue)
console.log(!isTrue)
console.log(!!3)
console.log(!!-1)
console.log(!!-2)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

let nome = ''

console.log(nome || 'Desconhecido')