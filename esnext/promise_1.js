let p = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

//você pode criar a função fora e passar no then ao invés de escrever a função nela
function primeiraLetra(string){
    return string[0]
}
p   //o resultado de um then é passado para o próximo

    .then(valor => valor[0])
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))