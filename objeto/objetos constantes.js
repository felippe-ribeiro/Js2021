//pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
/*
Este caso não funcionaria por ser constante e tentar mudar a referencia do objeto:
pessoa = {nome: 'Ana'} 
*/


Object.freeze(pessoa) //ignora tentativas de atribuições
pessoa.nome = 'Maria'
pessoa.endereco = 'rua XYZ'
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'}) // neste caso nada poderia ser mudado

console.log(pessoaConstante)