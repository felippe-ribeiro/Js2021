const { noop } = require("lodash")

//Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l,e,tras)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)

//arrow Function
const soma = (a,b) => a+b
console.log(soma(2,3))

//operador rest 
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5,6))
