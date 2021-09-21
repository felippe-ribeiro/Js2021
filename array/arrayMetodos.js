const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove ultimo elemento
console.log(pilotos)


pilotos.push('Verstappen') //adiciona elemento na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no começo
console.log(pilotos)

//splice, pode adicionar ou remover

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)


//esse gera um novo array
const algunsPilotos = pilotos.slice(2) // a partir do indice dois em diante
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // adiciona do 1 ao 4 sem contar o 4
console.log(algunsPilotos2)