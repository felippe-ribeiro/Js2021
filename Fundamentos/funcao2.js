//armazenando func em variavel

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2,3)

////armazenar arrowFunction

const soma = (a,b)=> {
    return a + b
}
console.log(soma(2,3))
//reduzindo mais
const subtracao = (a, b) => a - b

console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)

imprimir2('Legal!!!')