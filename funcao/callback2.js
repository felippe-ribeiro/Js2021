const notas = [7.7, 6.6, 5.2, 8.7, 3.5, 9.8]
//sem callback
const notasBaixas = []
for ( let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com Callback
const notasBaixas2 = notas.filter(function (nota){
    return nota <  7
})

console.log(notasBaixas2)
const notasMenorSete = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorSete)
console.log(notasBaixas3)

const notasAltas = notas.filter(nota => nota > 7)
console.log(notasAltas)