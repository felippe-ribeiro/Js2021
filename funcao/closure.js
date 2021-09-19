// é o escopo criado quando uma func é declarada
//permite a func acessar e manipular variaveis externas a ela


//lexico em acao

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())