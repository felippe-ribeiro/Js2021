//func de forma literal
function fun1(){}

//em variavel
const fun2 = function () {}

//armazenar em array

const array = [function (a,b) {return a+b}, fun1, fun2]

console.log(array[0](2,3))

const obj = {}

obj.falar = function() {return 'Opa'}
console.log(obj.falar())

function run(fun){
    fun()
}

run(function () {console.log('Executando...')})

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3) //mesmo resultado que o de cima
cincoMais(4)

let teste = function (teste){
    console.log('teste')
    return teste
}
let teste2 = function (){
    console.log('teste')
}

console.log(teste('teste2'))
console.log(teste2())