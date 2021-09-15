function soBoaNoticia(nota){
    if(nota >= 7 ){
        console.log('Passou com: ' + nota)
    }else if(nota == 6){
        console.log('Raspando em fi com:'  + nota)
    }else{
        console.log('Não Passou Nota: ' + nota)
    }
}

soBoaNoticia(7)
soBoaNoticia(6)
soBoaNoticia(5.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É Verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}
console.log('\n')
console.log('Início Notas com ElseIF')
const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else {
        console.log('Nota Inválida')
    }

}

imprimirResultado(8)
imprimirResultado(8.98)
imprimirResultado(4.5)
imprimirResultado(2.5)

