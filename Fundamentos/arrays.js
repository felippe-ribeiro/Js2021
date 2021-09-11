valores = [1,2,3,4,5,6,7,8,9,10]
console.log(valores[0], valores[5])

valores[10] = 11
console.log(valores)
console.log('São no total: ' + valores.length + ' elementos')
valores.push({id: 3}, 'paçoca', 4.2, true)
console.log(valores)
valores.pop()
console.log(valores)
delete valores[0]
console.log(valores)
console.log(typeof valores)
