//callback --> chamar de volta
const fabricantes = ['mercedes', 'Audi', 'BMW']
function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)//para cada elemento do arrai ele chama a função

fabricantes.forEach(fabricante => console.log(fabricante))