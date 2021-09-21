const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ //o indice é passado sempre como segundo parametro
                                            //podendo ser suprimido!
                                            // o 3 parametro seria o array inteiro
    console.log(`${indice +1}) ${nome}`)
})
console.log('-------------')
aprovados.forEach(nome => console.log(nome))
console.log('-------------')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
