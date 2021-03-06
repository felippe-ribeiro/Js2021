//usando notação literal
const obj = {}
console.log(obj)

//Object em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object 
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome //encapsulada no objeto com o this
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Felippe', 7980, 5)
const f2 = criarFuncionario('João', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)