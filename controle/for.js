for(let i = 1; i <= 10; i++){
    console.log(`contador = ${i}`)
}
console.log('\n')

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i = 0; i < notas.length; i++){
    console.log(`Índice: ${i}, Valor: ${notas[i]}`)
}
console.log('\n')
//ForIN 

for (let i in notas){
    console.log(`ForIn: Índice: ${i}, Valor: ${notas[i]}`)
}
console.log('\n')
const pessoa = {
    nome: 'Felippe',
    sobrenome: 'Silva',
    idade: 99,
    peso: 60
}

for(let atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}
console.log('\n')