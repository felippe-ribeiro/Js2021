function tratarErroELancar(erro){
    throw 'Error: 91987884489'
}
function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('Mesmo com erro executa, até quando cai no catch!')
    }
}

const obj = { name: 'Roberto'}
imprimirNomeGritando(obj)