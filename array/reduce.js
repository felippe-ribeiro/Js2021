const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]
console.log(alunos.map(a => a.nota))
console.log('-----------')
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log ('////////')
console.log(resultado)
console.log ('////////')
// se quiser passar valor inicial
const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log ('////////')
console.log(resultado2)
console.log ('////////')

//sendo sempre resultado anterior mais atual até executar todos.
