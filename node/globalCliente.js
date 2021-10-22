 //fazendo isso não é necessário fazer em mais nenhum outro arquivo, vai pra tudo
 require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita Mudei!'
console.log(MinhaApp.nome) // uma solução seria usar o freeze