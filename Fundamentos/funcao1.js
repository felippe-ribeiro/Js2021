//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(3,3,4,5,6,6,2) // ignora os demais usa só o que precisa
imprimirSoma()

//função com retorno
function soma(a = 0, b=0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(1))
console.log(soma())