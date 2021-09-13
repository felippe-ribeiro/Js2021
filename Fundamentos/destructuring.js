const pessoa = {
    nome: 'Felippe',
    idade: 5,
    endereco: {
        logadouro:'Rua ABC',
        numero: 1000
    }
}

const {nome, idade } = pessoa //esse destructin siginifica tire de pessao noem e idade
console.log(nome, idade, 'anos')

//caso queira criar as variaveis

const {nome: n, idade: i } = pessoa //esse destructin siginifica tire de pessao noem e idade
console.log(n, i, 'anos')

const {endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)