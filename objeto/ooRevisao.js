
//Colecção dinâmica de pares caves/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)
const carro = {
    modelo: 'A4',
    valor: 8900,
    proprietario: {
        nome: 'Felippe',
        idade: 32,
        endereco: {
            logradouro: 'Minha rua',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Joao',
        iade: 79
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Legal'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
//erro pq indefinido console.log(carro.condutores.length)