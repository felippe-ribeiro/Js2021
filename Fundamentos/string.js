const nome = 'felippe'

console.log(nome.charAt(4)) // posição na string
console.log(nome.charCodeAt(4)) // valor na tabela asc
console.log(nome.indexOf('f')) // indice do valor procurado
console.log(nome.substring(2)) // imprime a partir do indice indicado
console.log(nome.substring(2, 4)) // imprime a partir do indice indicado até antes do indicado
console.log('Nome: '.concat(nome).concat(' Barros'))
console.log('Nome: ' + nome + ' Barros')
console.log(nome.replace('p', 'i'))
console.log('Felippe,Barros,Ribeiro'.split(',')) // cria array conforme separador