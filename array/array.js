console.log(typeof [], typeof new Array, typeof Array)

let aprovados = new Array('Felippe', 'Barros', 'Ribeiro')
console.log(aprovados)

aprovados = ['Felippe', 'Barros', 'Ribeiro']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Silva Sauro'
aprovados.push('Literalmente')
console.log(aprovados.length)
console.log('/////////////')
aprovados[9] = 'Camanducaia'
console.log(aprovados.length)
console.log('/////////////')
console.log(aprovados[8] === undefined)
console.log('/////////////')
console.log(aprovados)
console.log(aprovados[8])
console.log('/////////////')
aprovados.sort()
console.log(aprovados)
console.log('/////////////')
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
console.log('/////////////')


aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
aprovados.splice(1,2, 'Felippe', 'Casa') 
//a partir do indice 1 exclui dois elementos, depois adiciona os dois
//essa adição é opcional
console.log(aprovados)

//se quiser adicionar só a partir do elemento tal faça assim ele empurra os que já tinha:
aprovados.splice(1,0, 'el1', 'el2')
console.log(aprovados)